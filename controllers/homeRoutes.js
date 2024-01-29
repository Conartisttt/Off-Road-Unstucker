const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');
const { Op } = require('sequelize');

// Route for homepage
router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      where: {
        user_id: {
          [Op.not]: req.session.user_id || ''
        }
      },
      include: [
        {
          model: User,
          as: 'userPost',
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.render('error');
    res.status(500);
  }
});

// Route for individual posts
router.get('/post/:id', async (req, res) => {
  try {
    // Get a post based on its ID and JOIN with user data
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'userPost',
          attributes: ['name', 'email', 'phone'],
        },
      ],
    });

    // Serialize data so the template can read it
    const post = postData.get({ plain: true });

    // Pass serialized data and session flag into template
    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.render('error');
    res.status(500);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    // Serialize data so the template can read it
    const user = userData.get({ plain: true });

    // Pass serialized data and session flag into template
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.render('error');
    res.status(500);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to profile route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('*', (req, res) => {
  res.render('homepage');
});

module.exports = router;
