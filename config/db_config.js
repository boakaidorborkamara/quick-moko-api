const {Sequelize} = require('sequelize');
const DataTypes = require('sequelize').DataTypes;


// import models 
const ClientsModel = require('../api/models/clients');
const LoanTransactionsModel = require('../api/models/loan_transtions');
const PaymentTransactionsModel = require('../api/models/payment_transaction');
const VendorsModel = require('../api/models/vendors');
const EmployeesModel = require('../api/models/employees');



//create a new instance of sequelize and connect to database
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'quickmokoDB.db'
});


//Verify if database connection was successfully created
(async function (){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();


//create database tables from models
let clients_table = ClientsModel(sequelize);
let loan_transactions_table = LoanTransactionsModel(sequelize);
let payment_transactions_table = PaymentTransactionsModel(sequelize);
let vendors_table = VendorsModel(sequelize);


EmployeesModel(Sequelize,sequelize, DataTypes);

  
// synchronize all of the above models 
(async ()=>{
    await sequelize.sync();
    console.log("All models were synchronized successfully.");

})();


module.exports = {
  clients_table,
  loan_transactions_table,
  payment_transactions_table,
  vendors_table
}





