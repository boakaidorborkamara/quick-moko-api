const { Sequelize, DataTypes, DATE } = require('sequelize');


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
    salary_deposit_to_mobile_money: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    monthly_salary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    home_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    employment_contract: {
      type: DataTypes.STRING,
      allowNull: false
    },
    employment_letter: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    national_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    national_identifcation_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gurantor_fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gurantor_contact_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gurantor_home_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gurantor_relation_to_creditor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mou_from_gurantor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gurantor_government_issued_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hr_fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hr_contact_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    employer_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    employer_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    loan_limit: {
      type: DataTypes.STRING,
      allowNull: false
    },
    validation_process_complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    pass_validation: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    terms_and_condition_accepted: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

}


module.exports = Client;