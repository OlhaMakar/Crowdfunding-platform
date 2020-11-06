'use strict';
module.exports = (sequelize, DataTypes) => {
  const integration_of_backers_with_comments = sequelize.define('integration_of_backers_with_comments', {
    comment_id: DataTypes.INTEGER,
    backer_id: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  integration_of_backers_with_comments.associate = function(models) {
    // associations can be defined here
  };
  return integration_of_backers_with_comments;
};