const Client = async (orm, sequelize, data_type)=>{
  await sequelize.define('clients', {
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
    date_of_birth: {
      type: data_type.DATE,
      allowNull: false
    },
    salary_deposit_to_mobile_money: {
      type: data_type.BOOLEAN,
      allowNull: false
    },
    monthly_salary: {
      type: data_type.STRING,
      allowNull: false
    },
    home_address: {
      type: data_type.STRING,
      allowNull: false
    },
    employment_contract: {
      type: data_type.STRING,
      allowNull: false
    },
    employment_letter: {
      type: data_type.STRING,
      allowNull: false
    },
    image: {
      type: data_type.STRING,
      allowNull: false
    },
    government_issued_id: {
      type: data_type.STRING,
      allowNull: false
    },
    id_card_type: {
      type: data_type.STRING,
      allowNull: false
    },
    gurantor_fullname: {
      type: data_type.STRING,
      allowNull: false
    },
    gurantor_contact_number: {
      type: data_type.STRING,
      allowNull: false
    },
    gurantor_home_address: {
      type: data_type.STRING,
      allowNull: false
    },
    gurantor_relation_to_creditor: {
      type: data_type.STRING,
      allowNull: false
    },
    mou_from_gurantor: {
      type: data_type.STRING,
      allowNull: false
    },
    gurantor_government_issued_id: {
      type: data_type.STRING,
      allowNull: false
    },
    hr_fullname: {
      type: data_type.STRING,
      allowNull: false
    },
    hr_contact_number: {
      type: data_type.STRING,
      allowNull: false
    },
    employer_name: {
      type: data_type.STRING,
      allowNull: false
    },
    employer_address: {
      type: data_type.STRING,
      allowNull: false
    },
    loan_limit: {
      type: data_type.STRING,
      allowNull: false
    },
    validation_process_complete: {
      type: data_type.BOOLEAN,
      allowNull: false
    },
    pass_validation: {
      type: data_type.BOOLEAN,
      allowNull: false
    },
    terms_and_condition_accepted: {
      type: data_type.STRING,
      allowNull: false
    },
    lastName: {
      type: data_type.STRING
      // allowNull defaults to true
    }
  });

}



module.exports = Client;