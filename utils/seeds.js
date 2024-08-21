//Import our models schema
const mongoose =require('mongoose');
const { User, Thought,Reaction } = require('../models');
const connection = require('../config/connection');


//Seed data

const users = [
    {
        username:'Jado',
        email:'jado@gmail.com',
        thought:[],
    },
    {
        username:'Gabriel',
        email:'gab@gmail.com',
        thought:[],
    },
];

connection.once('open', async ()=>{
    console.log('connected');
    //drop existing user
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }
    //adds seed data to database
    await User.insertMany(users);
    console.table(users);
    console.info("seeding complete");
})
