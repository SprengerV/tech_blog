const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const { trimTime } = require('../utils/helpers');
const { loggedIn } = require('../utils/auth');

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
router.get('/dashboard', loggedIn, (req, res) => {
    const userId = req.session.userId;
    console.log(`USER ID: ${userId}`)
    Post
        .findAll({ 
            where: { userId: userId },
            include: [
                {
                    model: User,
                    attributes: ['userName']
                },
                {
                    model: Comment,
                    attributes: ['id', 'body'],
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
        })
        .then((postData) => {
            const posts = postData.map(post => post.get({ plain: true }));
            res.render('dashboard', { posts, logged_in: req.session.loggedIn });
        })
        .catch(err => res.send(`Looks like there's an issue with the database`));
});
router.get('/signup', (req,res) => {
    res.render('signup')
});
router.get('/login', (req, res) => {
    res.render('login')
});

module.exports = router;