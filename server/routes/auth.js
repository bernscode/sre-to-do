const express = require('express');

// to use all get and post requests
const router = express.Router();



// import validators
const {userRegisterValidator} = require('../validators/auth');

// here '/index' may be removed as index is automatically available
const {runValidation} = require('../validators/index');


// import from controllers
const { register, registerActivate } = require('../controllers/auth');


router.post('/register', userRegisterValidator, runValidation, register);
router.post('/register/activate', registerActivate);


// export to server
module.exports = router;
