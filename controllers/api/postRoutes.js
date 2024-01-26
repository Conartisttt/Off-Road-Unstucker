const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).end();
  }
});

// Deletes post based on its ID
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!postData) {
      res.status(500).json({ message: 'No post found with this id!' });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).end();
  }
});

// Updates post based on its ID
router.put('/:id', async (req, res) => {
  try {
    await Post.update(
      {
        name: req.body.name,
        description: req.body.description,
        vehicle_make: req.body.vehicle_make,
        vehicle_model: req.body.vehicle_model,
        contact_method: req.body.contact_method,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );
    res.status(200);
  } catch {
    res.status(500).end();
  }
});

module.exports = router;
