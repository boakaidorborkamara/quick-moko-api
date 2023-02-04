const Vendor = async (orm, sequelize, data_type)=>{
    await sequelize.define('vendors', {
      // Model attributes
      id: {
        type: orm.UUID, //require UUID from orm
        defaultValue: orm.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: data_type.STRING,
        allowNull: false
      },
      logo: {
        type: data_type.STRING,
      },
      address: {
        type: data_type.STRING, 
        allowNull: false
      },
      email: {
        type: data_type.STRING,
        allowNull: false
      },
      contact_number: {
        type: data_type.STRING,
        allowNull: false
      },
      mobile_money_number: {
        type: data_type.STRING,
        allowNull: false
      },
      password: {
        type: data_type.STRING,
        allowNull: false
      },
      government_issued_id: {
        type: data_type.STRING,
        allowNull: false
      }
    });
  
  }
  
  
 
  
  module.exports = Vendor;