const { Post, User } = require("../models");

module.exports = {
    loggedIn: (req, res, next) => {
        if (!req.session.loggedIn) {
            res.redirect('/login');
        } else {
            next();
        }
    },
    postAuth: async (req, res, next) => {
        const post = await Post.findByPk(req.body.postId, { raw: true });
        console.log(post)
        if (req.session.userId === post.userId) {
            next();
        } else res.redirect('/')
    }
}