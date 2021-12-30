const Sequelize = require('sequelize');

 const sequelize = require('../util/database');

 // Defining a User object --> table
 const User = sequelize.define('user',{
     id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true
     },
     name: {
        type: Sequelize.STRING,
        allowNull: false
     },
     email: {
        type: Sequelize.STRING,
        allowNull: false
     },
     password: {
        type: Sequelize.STRING,
        allowNull: false
     },
     interests: {
         type: Sequelize.STRING
     },
     imageUrl: {
         type: Sequelize.STRING,
         allowNull: false
     },
     events: {
         type: Sequelize.STRING
     }
 });

 module.exports = User;