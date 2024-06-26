'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TrainingAttendances', {
      AttendanceID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TrainingProgramID: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      EmployeeID: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      AttendanceDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      IsActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TrainingAttendances');
  }
};
