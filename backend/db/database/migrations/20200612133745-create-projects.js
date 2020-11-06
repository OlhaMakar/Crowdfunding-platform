'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.DECIMAL
      },
      collected_amount: {
        type: Sequelize.DECIMAL
      },
      region_id: {
        type: Sequelize.INTEGER
      },
      district_id: {
        type: Sequelize.INTEGER
      },
      united_territorial_community_id: {
        type: Sequelize.INTEGER
      },
      like_count: {
        type: Sequelize.INTEGER
      },
      dislike_count: {
        type: Sequelize.INTEGER
      },
      expitation_date: {
        type: Sequelize.DATE
      },
      status_id: {
        type: Sequelize.INTEGER
      },
      category_id: {
        type: Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('projects');
  }
};