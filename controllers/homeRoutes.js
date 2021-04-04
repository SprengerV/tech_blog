const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/home', (req, res) => {
    res.status(200).json({ message: 'welcome home (sanitarium)' })
});
router.get('/', (req, res) => {
    Post.findAll(
        {
            raw: true,
            include: [User, Comment]        
        }
    )
    .then((posts) => {
        console.log(posts)
        if (req.session.loggedIn) {
            res.render('recent', { posts, logged_in: true })
            // res.send(posts)
        } else {
            res.render('recent', { posts })
            // res.send(posts)
        }
    })
});
router.get('/signup', (req,res) => {
    res.render('signup')
});
router.get('/login', (req, res) => {
    res.render('login')
});

module.exports = router;