module.exports = {
    loggedIn: (req, res, next) => {
        if (!req.session.loggedIn) {
            res.redirect('/login');
        } else {
            next();
        }
    },
    postAuth: (req, res, next) => {
        if (req.session.userId === req.body.id) {
            next();
        } else res.redirect('/')
    }
}