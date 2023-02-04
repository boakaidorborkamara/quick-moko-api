const Employee = async (orm, sequelize, data_type)=>{
    await sequelize.define('employees', {
      // Model attributes
      id: {
        type: orm.UUID, //require UUID from orm
        defaultValue: orm.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      first_name: {
        type: data_type.STRING,
        allowNull: false
      },
      middle_name: {
        type: data_type.STRING,
      },
      last_name: {
        type: data_type.STRING,
        allowNull: false
      },
      position: {
        type: data_type.STRING,
        allowNull: false
      },
      department: {
        type: data_type.STRING,
        allowNull: false
      },
      cash_amount: {
        type: data_type.STRING,
        allowNull: false
      },
      purpose: {
        type: data_type.STRING,
        allowNull: false
      },
      logo: {
        type: data_type.STRING,
      },
      mobile_money_number: {
        type: data_type.STRING,
        allowNull: false
      },
      vendor_id: { //foreign key
        type: data_type.STRING,
        allowNull: false
      }
    });
  
  }
  
  
 
  
  module.exports = Employee;