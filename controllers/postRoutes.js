const router = require('express').Router();
const withAuth = require('../utils/auth.js');
const { User, Post, Comment } = require('../models');

// routes for /post
router.get('/add', withAuth, (req, res) => {
    res.render('addPost', { logged_in: req.session.loggedIn })
});
router.get('/:id', withAuth, (req, res) => {
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