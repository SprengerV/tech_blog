const router = require('express').Router();
const withAuth = require('../utils/auth.js');

// routes for /post/
router.get('/new', withAuth, (req, res) => {

});
router.get('/:id', withAuth, (req, res) => {

});

module.exports = router;