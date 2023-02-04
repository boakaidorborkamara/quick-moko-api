const PaymentTransaction = async (orm, sequelize, data_type)=>{
    await sequelize.define('payment_transactions', {
      // Model attributes
      id: {
        type: orm.UUID, //require UUID from orm
        defaultValue: orm.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      date: {
        type: data_type.DATE,
        allowNull: false
      },
      amount: {
        type: data_type.STRING, 
        allowNull: false
      },
      client_id: { //foreign_key
        type: data_type.STRING,
        allowNull: false
      },
      vendor_id: { //foreign_key
        type: data_type.STRING,
        allowNull: false
      }
    });
  
  }
  
  
 
  
  module.exports = PaymentTransaction;