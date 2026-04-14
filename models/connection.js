const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const database = 'tickethack'
const connectionString = process.env.CONNECTION_STRING

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
    .then(() => console.log(`${database} connecté`))
    .catch(error => console.error(error));