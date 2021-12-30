// importing sequelize objet
const Sequelize = require('sequelize'); 

// instantiation of a sequelize object 
const sequelize = new Sequelize('GroupIT', 'root', 'root1234', {
    dialect : 'mysql', 
    host : 'localhost'
});

// exporting the connection
module.exports = sequelize;
