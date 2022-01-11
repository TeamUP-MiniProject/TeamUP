// SEQUELIZE - connection setup
// // importing sequelize objet
// const Sequelize = require('sequelize'); 

// // instantiation of a sequelize object 
// const sequelize = new Sequelize('GroupIT', 'root', 'root1234', {
//     dialect : 'mysql', 
//     host : 'localhost'
// });

// // exporting the connection
// module.exports = sequelize;

const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
    mongoClient.connect("mongodb+srv://ronts:kFerLNkndTuK5FX@cluster0.ruopo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(client_result => {
        console.log("Connected to MongoDB");
        _db = client_result.db();
        callback();
})
    .catch(err => console.log("Error connecting to MongoDB", err));
}

const getDb = () => {
    if(_db) {
        return _db;
    }
    throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;