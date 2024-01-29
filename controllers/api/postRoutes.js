const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');
const nodemailer = require('nodemailer');

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
    res.status(200).end();
  } catch {
    res.status(500).end();
  }
});

//Update post helper_id with the user who clicked the button (saved in req.session.user_id)
router.patch('/:id/accept', async (req, res) => {
  try {
    await Post.update({
      helper_id: req.session.user_id,
    },
    {
      where: {
        id: req.params.id,
      },
    });

    //find a post where the helper_id is the user we just assigned above
    const postData = await Post.findOne({
      where: { helper_id: req.session.user_id },
      include: [
        {
          model: User,
        },
      ]
    });

    //find the user whose ID matches the user_id saved in the post we found above
    const stuckUserData = await User.findOne({
      where: {id: postData.dataValues.user_id}
    });

    const helpingUserData = await User.findOne({
      where: {id: req.session.user_id}
    });

    //send email to user who is stuck
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'giselamata27@gmail.com',
        pass: 'assa lhem ektl yjzg'
      }
    });
    const mailOptions = {
      from: 'giselamata27@gmail.com',
      to: stuckUserData.dataValues.email,
      subject: 'Help is on the way!',
      text: `Hi ${stuckUserData.dataValues.name}, \n\nHelp is on the way!\n ${helpingUserData.dataValues.name} has accepted your job and is coming to get you. \n Feel free to connect with them at: \n Phone: ${helpingUserData.dataValues.phone} \n Email: ${helpingUserData.dataValues.email} \n\n Thanks so much for using our service! \n\n -The Team here at Off The Beaten Path.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email', error);
        res.status(500).json({ message: 'Failed to send email' });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ message: 'Mission accepted successfully!' });
      }
    });
  } catch (err) {
    res.status(500).end();
  }
});

module.exports = router;