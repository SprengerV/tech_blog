const router = require('express').Router();

router.get('/home', (req, res) => {
    res.status(200).json({ message: 'welcome home (sanitarium)' })
})
router.get('/', (req, res) => {
    res.render('recent')
})

module.exports = router;