const router = require('express').Router();
const { loggedIn } = require('../utils/auth.js');
const { User, Post, Comment } = require('../models');

// routes for /post
router.get('/add', loggedIn, (req, res) => {
    res.render('addPost', { logged_in: req.session.loggedIn })
});
router.get('/:id', loggedIn, (req, res) => {
    Post
        .findByPk(req.params.id,
            {
                include: [
                    {
                        model: User,
                        attributes: ['userName']
                    },
                    {
                        model: Comment,
                        attributes: ['body', 'createdAt'],
                        include: [
                            {
                                model: User,
                                attributes: ['userName']
                            }
                        ]
                    }
                ],
            }
        )
        .then((postData) => {
            const post = postData.get({ plain: true });
            res.render('post', { post, logged_in: req.session.loggedIn });
        })
        .catch(err => console.error(err))
});

module.exports = router;