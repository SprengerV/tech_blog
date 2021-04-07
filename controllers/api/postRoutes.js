const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
const { loggedIn } = require('../../utils/auth');

router.post('/add', loggedIn, (req, res) => {
    Post
        .create(
            {
                userId: req.session.userId,
                title: req.body.title,
                body: req.body.body
            }
        )
        .then(postData => {
            postData ? res.status(200).json(postData) : res.status(400).json({ message: 'Post creation failed' });
        })
        .catch(err => res.status(500).json(err));
});

    

module.exports = router;