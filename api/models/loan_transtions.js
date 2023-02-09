const { Sequelize, DataTypes, DATE } = require('sequelize');
const ClientsModel = require('./clients');


const LoanTransaction = (sequelize)=>{
    return sequelize.define('loan_transactions', {
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
      }
    });
  
  }
  
  
module.exports = LoanTransaction;