const { Sequelize, DataTypes, DATE, BOOLEAN } = require('sequelize');


// defines a new sequelize model 
const Client = (sequelize)=>{
  return sequelize.define('clients', {
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
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    home_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    position_at_job: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salary_deposit_to_mobile_money: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    mobile_money_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    monthly_salary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profile_image: {
      type: DataTypes.STRING,
      defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSNXj1w-ssziSYzpofb8u0Jjwzt4JzQ5PcsJ7FAlRDsevjCyjeVpsfc5hrad5-N6N0oU4&usqp=CAU",
      allowNull: false
      
    },
    national_id: {
      type: DataTypes.STRING
    },
    NIN_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    // employer's info 
    employer_name: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    employer_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hr_fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hr_home_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hr_phone_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    employment_contract: {
      type: DataTypes.STRING,
    },
    employment_letter: {
      type: DataTypes.STRING,
    }, 
    
    // guarantor's info 
    guarantor_fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    guarantor_date_of_birth: {
      type: DataTypes.STRING,
      allowNull: false
    },
    guarantor_home_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    guarantor_phone_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    guarantor_relationship_to_creditor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mou_from_guarantor: {
      type: DataTypes.STRING
    },
    guarantor_government_issued_id: {
      type: DataTypes.STRING
    },

    // extra info 
    accept_policy: {
      type: DataTypes.BOOLEAN
    },
    loan_limit: {
      type: DataTypes.STRING,
    },
    validation_process_complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    pass_validation: {
      type: DataTypes.BOOLEAN
    },
    password_generated:{
      type:DataTypes.BOOLEAN,
      defaultValue:false,
      allowNull:false
    },
    password:{
      type:DataTypes.BOOLEAN
    }
  });

}


module.exports = Client;