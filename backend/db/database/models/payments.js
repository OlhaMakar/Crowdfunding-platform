'use strict';
module.exports = (sequelize, DataTypes) => {
  const payments = sequelize.define('payments', {
    project_id: DataTypes.INTEGER,
    backer_id: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    transaction_id: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  payments.associate = function(models) {
    // associations can be defined here
  };
  return payments;
};