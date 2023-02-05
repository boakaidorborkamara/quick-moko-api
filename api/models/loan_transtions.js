const { Sequelize, DataTypes, DATE } = require('sequelize');

const LoanTransaction = async (sequelize)=>{
    await sequelize.define('loan_transactions', {
      // Model attributes
      id: {
        type: Sequelize.UUID, //require UUID from orm
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      amount: {
        type: DataTypes.STRING, 
        allowNull: false
      },
      purpose: {
        type: DataTypes.STRING,
        allowNull: false
      },
      client_id: { //foreign_key
        type: DataTypes.STRING,
        // allowNull: false
      }
    });
  
  }
  
  
 
  
  module.exports = LoanTransaction;