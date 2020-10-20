// build server with express
const express = require('express');
// allows to view request coming to a route
const morgan = require('morgan');
// convert JSON to JS for backend
const bodyParser = require('body-parser');
// cross-origin resourse sharing for communicating from one domain to another
const cors = require('cors');
// used for schema setup
const mongoose = require('mongoose');
// used for private files
require('dotenv').config();


const app = express();


// import routes
const authRoutes = require('./routes/auth');


// app middlewares
// set morgan flag to dev mode
app.use(morgan('dev'));
// used to pass JSON
app.use(bodyParser.json());
// for front-end to communicate with back-end API
app.use(cors());


// middlewares, code to run in the middle
app.use('/api', authRoutes);



const port = process.env.PORT || 8000;



app.listen(port, () => console.log('API is running on port ${port}'));
