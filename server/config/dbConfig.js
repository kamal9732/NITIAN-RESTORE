const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)

const connection = mongoose.connection;

connection.on('connected'  , ()=>{
    console.log('Mongo DB Connection Successful');
})

connection.on('error'  , (err)=>{
    console.log('Mongo DB Connection Failed');
})

module.exports = connection;