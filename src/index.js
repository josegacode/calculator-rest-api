const express = require('express');
const morgan = require('morgan'); 
const app = express();
const path = require('path');

// Server settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev')); // Server requests in console
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false })); // Gets data from HTML Forms
app.use(express.json()); // Parses incoming req. to JSON 

// Template engine (Pug)
// Search the templates in ./views folder
app.set("views", path.join(__dirname, "views"));

// Setting what template engine to use
app.set("view engine", "pug");

// API routes
app.use(require('./routes')); 
app.use('/api/v1/operation', require('./routes/calculator')); 
//app.use('/api/users', require('./routes/users')); 

// Starts the server within user feedback
app.listen(app.get('port'), () => {
  console.log(`Server runnig on port ${app.get('port')}`);
})


