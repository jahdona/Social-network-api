const { connect, connection }=require('mongoose');

//create database if not exist or select database to be used

const connectionString= process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialNetworkDB";
//connect mongoose and MongoDB
connect(connectionString);
//EXPORTS
module.exports=connection;
