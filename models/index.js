const User = require('./User');
const Post = require('./Post');

//Set up foreign key relationship between User and Post tables
User.hasOne(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  as: 'userPost',
  foreignKey: 'user_id'
});

User.hasMany(Post, {
  foreignKey: 'helper_id',
});

Post.belongsTo(User, {
  foreignKey: 'helper_id'
});

module.exports = { User, Post };