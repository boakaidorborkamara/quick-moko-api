const { Sequelize } = require('sequelize');


//connect to database
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'platformDB.db'
});



//Test if connection was successfully created
(async function (){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();


