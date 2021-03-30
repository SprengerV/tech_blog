const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'w00tis' })
});

module.exports = router;
