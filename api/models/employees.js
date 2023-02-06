const { Sequelize, DataTypes, DATE } = require('sequelize');


const Employee = (sequelize)=>{
    return sequelize.define('employees', {
      // Model attributes
      id: {
        type: Sequelize.UUID, //require UUID from orm
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      middle_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cash_amount: {
        type: DataTypes.STRING,
        allowNull: false
      },
      purpose: {
        type: DataTypes.STRING,
        allowNull: false
      },
      logo: {
        type: DataTypes.STRING,
      },
      mobile_money_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      vendor_id: { //foreign key
        type: DataTypes.STRING,
        allowNull: true
      }
    });
  
  }
  
  
 
  
  module.exports = Employee;