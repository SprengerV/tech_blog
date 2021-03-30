const router = require('express').Router();

router.get('home', (req, res) => {
    res.status(200).json({ message: 'welcome home (sanitarium)' })
})

module.exports = router;