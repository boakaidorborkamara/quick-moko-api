const {Sequelize} = require('sequelize');
const {DataTypes} = require('sequelize');


// import models 
const ClientsModel = require('../api/models/clients');
const VendorsModel = require('../api/models/vendors');


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


//create tables from models
ClientsModel(Sequelize,sequelize, DataTypes);
VendorsModel(Sequelize,sequelize, DataTypes);


// synchronize all of the above models 
(async ()=>{
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");

})();


module.exports.database_config = sequelize;





