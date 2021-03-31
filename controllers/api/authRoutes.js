const router = require('express').Router();
const User = require('../../models').User;

router.post('/', (req, res) => {
    User
        .create(req.body)
        .then((userData) => {
            console.log(`User "${req.body.userName}" registered`);
            res
                .status(200)
                .json(userData);
        });
});
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { userName: req.body.userName } })
        if (!userData) {
            res
                .status(400)
                .json({ message: `User "${req.body.userName}" not found`});
            return;
        }
        const validPw = await userData.checkPassword(req.body.password);
        if (!validPw) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. please try again'});
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true

            res.json({ user: userData, message: 'You are now logged in'});
        });
    } catch (err) {
        res
            .status(400)
            .json(err);
    }
})

module.exports = router;