const router = require('express').Router();

router.get('/home', (req, res) => {
    res.status(200).json({ message: 'welcome home (sanitarium)' })
});
router.get('/', (req, res) => {
    res.render('recent')
});
router.get('/signup', (req,res) => {
    res.render('signup')
});
router.get('/login', (req, res) => {
    res.render('login')
});

module.exports = router;