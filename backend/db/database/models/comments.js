'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    project_id: DataTypes.INTEGER,
    backer_id: DataTypes.INTEGER,
    message: DataTypes.STRING,
    like_count: DataTypes.INTEGER,
    dislike_count: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  comments.associate = function(models) {
    // associations can be defined here
  };
  return comments;
};