const router = require('express').Router();
const { loggedIn } = require('../../utils/auth');
const { Comment } = require('../../models');

// routes for /api/comment
router.post('/add', loggedIn, (req, res) => {
    Comment.create({
        userId: req.session.userId,
        postId: req.body.postId,
        body: req.body.body
    })
    .then(commentData => {
        commentData ? res.status(200).json(commentData) : res.status(400).json(commentData);
    })
    .catch(err => res.status(500).json(err))
});

module.exports = router;