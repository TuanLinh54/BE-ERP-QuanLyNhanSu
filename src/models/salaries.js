'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Salary extends Model {
        static associate(models) {
            // define association here
        }
    }
    Salary.init({
        SalaryID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        EmployeeID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        SalaryAmount: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        SalaryDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        IsActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Salary',
        tableName: 'Salaries',
        timestamps: true
    });
    return Salary;
};
