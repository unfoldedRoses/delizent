
const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');

const dotenv = require('dotenv');
dotenv.config();




const sequelize = new Sequelize("delizent","postgres", "postgres", {
  host: "localhost",
  dialect: 'postgres',
  port: 5432,

});





const db = {};

// Read all the model files from the models directory
fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js') // Exclude the index.js file
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Define associations between models if needed
Object.values(db).forEach(model => {
  if (model.associate) {
    model.associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
