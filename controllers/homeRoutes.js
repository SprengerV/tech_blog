const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const { sequelize } = require('../models/User');
const { trimTime } = require('../utils/helpers');

router.get('/home', (req, res) => {
    res.status(200).json({ message: 'welcome home (sanitarium)' })
});
router.get('/', (req, res) => {
    Post.findAll(
        {
            limit: 25,
            include: [
                {
                    model: User,
                    attributes: ['userName']
                },
                {
                    model: Comment,
                    attributes: ['body', 'id'],
                    include: [
                        {
                            model: User,
                            attributes: ['userName']
                        }
                    ]
                }
            ],
            order: [
                ['createdAt', 'DESC']        
            ]
        }
    )
    .then((postData) => {
        console.log(postData)
        const posts = postData.map(post => post.get({ plain: true }));
        res.render('recent', { posts, logged_in: req.session.loggedIn })
    })
    .catch(err => console.error(err))
});
router.get('/signup', (req,res) => {
    res.render('signup')
});
router.get('/login', (req, res) => {
    res.render('login')
});

module.exports = router;