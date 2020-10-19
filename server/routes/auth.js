const express = require('express');

// to use all get and post requests
const router = express.Router();


// import from controllers
const { register } = require('../controllers/auth');


router.get('/register', register);


// export to server
module.exports = router;
