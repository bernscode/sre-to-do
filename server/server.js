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



// Database
mongoose
  // { useNewUrlParser: true, useUnifiedTopology: true } added due to deprecation warning from terminal
  .connect(process.env.DATABASE_CLOUD, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch( (err) => console.log(err));





// import routes
const authRoutes = require('./routes/auth');


// app middlewares
// set morgan flag to dev mode
app.use(morgan('dev'));
// used to pass JSON
app.use(bodyParser.json());


// for front-end to communicate with back-end API
// app.use(cors());
// explicit URL
app.use(cors({origin: process.env.CLIENT_URL}));


// middlewares, code to run in the middle
app.use('/api', authRoutes);



const port = process.env.PORT || 8000;



app.listen(port, () => console.log('API is running on port ${port}'));
