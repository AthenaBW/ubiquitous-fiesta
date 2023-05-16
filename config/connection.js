// Importing the mongoose library
const mongoose = require('mongoose');
// Connecte to the MongoDB database using the MongoDB URI provided in the environment 
mongoose.connect(process.env.MONOGDB_URI || 'mongodb://localhost:27017/socialdb',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

// Exporting the connection to the database as a module
module.exports = mongoose.connection