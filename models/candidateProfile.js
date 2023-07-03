const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CandidateProfile = sequelize.define('CandidateProfile', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    profile_image: {
      type: DataTypes.STRING,
    },
   
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
   
  });

  return CandidateProfile;
};
