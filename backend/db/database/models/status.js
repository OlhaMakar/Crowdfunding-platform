'use strict';
module.exports = (sequelize, DataTypes) => {
  const status = sequelize.define('status', {
    name: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  status.associate = function(models) {
    // associations can be defined here
  };
  return status;
};