const User = require("../models/user");
const CandidateProfile = require('../models/canditateProfile');

const isDev = false;
const dbInit = () => {
  User.sync({ alter: isDev });
  CandidateProfile.sync({ alter: isDev });
};

module.exports = dbInit;
