const Client = async (sequelize, data_type)=>{
  await sequelize.define('clients', {
    // Model attributes are defined here
    firstName: {
      type: data_type.STRING,
      allowNull: false
    },
    lastName: {
      type: data_type.STRING
      // allowNull defaults to true
    }
  }, { 
    // Other model options go here 
  });

}







module.exports = Client;