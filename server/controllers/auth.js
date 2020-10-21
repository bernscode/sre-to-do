// import 'User' model to user methods avaiable with mongoose
const User = require('../models/user');

const AWS = require('aws-sdk');
// import json web token for email confirmation
// NOTE: All JWT codes in .env are random
const jwt = require('jsonwebtoken');
// import registration email function
const { registerEmailParams } = require('../helpers/email');


AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});


// data from official docs
const ses = new AWS.SES({ apiVersion: '2010-12-01' });


// send email to user
exports.register = (req, res) => {
  // console.log('REGISTER CONTROLLER', req.body);
  const {name, email, password} = req.body;


  // check if user exists in our database
  // find() finds collection, findOne() finds only the user with email that matches
  User.findOne({email}).exec((err, user) => {
    if(user) {
      // console.log for debugging
      // console.log(err);
      return res.status(400).json({
        error: 'Email is taken'
      });
    }

    // generate token with user, name, and password used with email confirmation
    const token = jwt.sign({name, email, password}, process.env.JWT_ACCOUNT_ACTIVATION, {
      expiresIn: '10m'
    });


    // send email
    //this function is in helpers/email.js
    const params = registerEmailParams(email, token);



    const sendEmailOnRegister = ses.sendEmail(params).promise();

    sendEmailOnRegister
    .then(data => {
      console.log('email submitted to SES', data);
      // send JSON response
      res.json({
        message: `Email has been sent to ${email}, Follow the instructions to complete your registration`
      });
    })
    .catch(error => {
      console.log('ses email on register', error);
      res.json({
        message: `We could not verify your email. Please try again`
      });
    });


  });




};
