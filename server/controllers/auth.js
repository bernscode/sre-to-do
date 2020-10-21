// import 'User' model to user methods avaiable with mongoose
const User = require('../models/user');

const AWS = require('aws-sdk');
// import json web token for email confirmation
// NOTE: All JWT codes in .env are random
const jwt = require('jsonwebtoken');
// import registration email function
const { registerEmailParams } = require('../helpers/email');

const shortId = require('shortid');


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



// activate account in server

exports.registerActivate = (req, res) => {
    const { token } = req.body;
    // console.log(token);
    jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, function(err, decoded) {
        if (err) {
            return res.status(401).json({
                error: 'Expired link. Try again'
            });
        }

        // extract info from token to make sure email is unique
        const { name, email, password } = jwt.decode(token);
        const username = shortId.generate();

        User.findOne({ email }).exec((err, user) => {
            if (user) {
                return res.status(401).json({
                    error: 'Email is taken'
                });
            }

            // register new user
            const newUser = new User({ username, name, email, password });
            newUser.save((err, result) => {
                if (err) {
                    return res.status(401).json({
                        error: 'Error saving user in database. Try later'
                    });
                }
                return res.json({
                    message: 'Registration success. Please login.'
                });
            });
        });
    });
};
