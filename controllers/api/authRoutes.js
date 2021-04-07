const router = require('express').Router();
const User = require('../../models').User;

router.post('/', (req, res) => {
    User
        .create(req.body)
        .then(userData => {
            if (!userData) {
                res
                    .status(400)
                    .json({ message: 'User failed to create' });
                return
            }
            console.log(`User "${req.body.userName}" registered`);
            req.session.save(() => {
                req.session.userId = userData.id;
                req.session.loggedIn = true;
                res
                    .status(200)
                    .json({ user: userData, message: 'You are now logged in'});
            });
        })
        .catch(err => res.status(500).json(err));
});
router.post('/login', (req, res) => {    
    User
        .findOne({ where: { userName: req.body.userName } })
        .then(async (userData) => {
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
                req.session.userId = userData.id;
                req.session.loggedIn = true
                res.json({ user: userData, message: 'You are now logged in'});
            });
        })
        .catch((err) => {
            console.log(err)
            res
                .status(500)
                .json(err)
        });
});
router.post('/logout', (req, res) => {
    req.session.save(() => {
        req.session.userId = false,
        req.session. loggedIn = false
        res.json({ message: "You are now logged out" })
    });
});

module.exports = router;