'use strict';
module.exports = (sequelize, DataTypes) => {
  const integration_of_backers_with_projects = sequelize.define('integration_of_backers_with_projects', {
    project_id: DataTypes.INTEGER,
    backer_id: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
    saved: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  integration_of_backers_with_projects.associate = function(models) {
    // associations can be defined here
  };
  return integration_of_backers_with_projects;
};