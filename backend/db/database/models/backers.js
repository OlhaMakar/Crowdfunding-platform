'use strict';
module.exports = (sequelize, DataTypes) => {
  const backers = sequelize.define('backers', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  backers.associate = function(models) {
    // associations can be defined here
  };
  return backers;
};