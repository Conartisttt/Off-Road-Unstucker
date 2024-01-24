const User = require('./User');
const Post = require('./Post');

//Set up foreign key relationship between User and Post tables
User.hasOne(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post };
