const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Updates book based on its isbn
router.put('/:id', (req, res) => {
  // Calls the update method on the Book model
  Post.update(
    {
      // All the fields you can update and the data attached to the request body.
      name: req.body.name,
      description: req.body.description,
      vehicle_make: req.body.vehicle_make,
      vehicle_model: req.body.vehicle_model,
      contact_method: req.body.contact_method,
    },
    {
      // Gets the books based on the isbn given in the request parameters
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    }
  )
    .then((updatedPost) => {
      // Sends the updated book as a json response
      res.json(updatedPost);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
