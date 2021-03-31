const router = require('express').Router();
const User = require('../../models').User;

router.post('/', (req, res) => {
    console.log(req.body)
    User
        .create(req.body)
        .then((userData) => {
            console.log(`User "${req.body.userName}" registered`);
            res.status(200).json(userData);
        });
});

module.exports = router;