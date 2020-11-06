'use strict';
module.exports = (sequelize, DataTypes) => {
  const projects = sequelize.define('projects', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    collected_amount: DataTypes.DECIMAL,
    region_id: DataTypes.INTEGER,
    district_id: DataTypes.INTEGER,
    united_territorial_community_id: DataTypes.INTEGER,
    like_count: DataTypes.INTEGER,
    dislike_count: DataTypes.INTEGER,
    expitation_date: DataTypes.DATE,
    status_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  projects.associate = function(models) {
    // associations can be defined here
  };
  return projects;
};