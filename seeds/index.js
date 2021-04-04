const { User, Post, Comment } = require('../models');
const Sequelize = require('../config/connection');

const seed = async () => {
    try {
        const bfrancis = await User.create({ userName: 'bfrancis', password: 'bfrancis' })
        const lucy = await User.create({ userName: 'lucypurr', password: 'lucypurr' })
        const tina = await User.create({ userName: 'tlharris', password: 'tlharris' })
        console.log('Users seeded!');
        const b1 = await Post.create(
            {
                userId: bfrancis.id,
                title: 'the best post ever',
                body: 'this is the best post ever and you can\'t prove me wrong'
            }
        );
        const b2 = await Post.create(
            {
                userId: bfrancis.id,
                title: 'second best post',
                body: 'I here by proclaim that this post is second best!'
            }
        );
        const b3 = await Post.create(
            {
                userId: bfrancis.id,
                title: 'thirdly:',
                body: 'this post second second best'
            }
        );
        const l1 = await Post.create(
            {
                userId: lucy.id,
                title: 'sitting on stuff',
                body: 'I like to sit on stuff. And in stuff too.'
            }
        );
        const l2 = await Post.create(
            {
                userId: lucy.id,
                title: 'parkour',
                body: 'After I eat dinner I like to try out my latest parkour manouvers.'
            }
        );
        const t1 = await Post.create(
            {
                userId: tina.id,
                title: 'my son',
                body: 'I have literally the best son in the entire world. Words can not describe how perfectly amazing he is. I\'m feel so blessed to have him grace me with his presence.'
            }
        );
        const t2 = await Post.create(
            {
                userId: tina.id,
                title: 'my cat',
                body: 'My cat lucy is a little screwball. Probably the cutest kitten of all time. Oh boy do I love her.'
            }
        );
        console.log('Posts seeded!');
        await Comment.bulkCreate([
            {
                userId: bfrancis.id,
                postId: l1.id,
                body: 'You\'re sitting on my desk right now! LOL'
            },
            {
                userId: bfrancis.id,
                postId: t1.id,
                body: 'Can I get an amen?'
            },
            {
                userId: lucy.id,
                postId: t1.id,
                body: 'I concur'
            },
            {
                userId: lucy.id,
                postId: t2.id,
                body: 'Awe shucks'
            },
            {
                userId: tina.id,
                postId: b1.id,
                body: 'yeah, yeah'
            },
            {
                userId: lucy.id,
                postId: b2.id,
                body: 'FIRST!!1'
            }
        ]);
        console.log('Comments seeded!');
    } catch (err) {
        console.error(err);
    }
}

Sequelize
    .sync({ force: true })
    .then(() => {
        seed(); 
    })