// Import required packages / files 
const express =  require('express');
const db = require('./config/connection');
const routes = require('./routes');
// Set up environment variables
const PORT = process.env.PORT || 3001;
const app = express();
//  Middleware to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//  Routes defined in routes.js
app.use(routes); 
// Connect to the MongoDB database / server start
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}!`);
    });
  });