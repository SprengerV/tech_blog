const router = require('express').Router();
const withAuth = require('../utils/auth.js');
const { User, Post, Comment } = require('../models');

// routes for /post
router.get('/new', withAuth, (req, res) => {

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
                ]
            }
        )
        .then((postData) => {
            const post = postData.get({ plain: true });
            res.render('post', { post, logged_in: req.session.loggedIn });
        })
});

module.exports = router;