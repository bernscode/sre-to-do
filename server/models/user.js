// Use Mongoose for schema
const mongoose = require('mongoose');
// Use crypto from node_modules to hash password
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    require: true,
    max: 12,
    unique: true,
    index: true,
    lowercase: true
  },
  name: {
    type: String,
    trim: true,
    require: true,
    max: 32
  },
  email: {
    type: String,
    trim: true,
    require: true,
    unique: true,
    max: 32,
    lowercase: true
  },
  // hashed password for security
  hashed_password: {
    type: String,
    require: true
  },
  // how strong of hash on password
  salt: String,
  role: {
    type: String,
    default: 'subscriber'
  },
  resetPasswordLink: {
    data: String,
    default: ''
  }
}, {timestamps:true})



// virtual fields
userSchema.virtual('password')
  .set(function(password) {
    // create temp variable called _password
    this._password = password;

    // generate makeSalt
    this.salt = this.makeSalt();

    // encrypt  password
    this.hashed_password = this.encryptPassword(password);

  })

  .get(function() {
    return this._password
  })


// methods > authenticate, encryptPassword, makeSalt
// object with anonymous functions
userSchema.methods = {

  authenticate: function(plainText){
    return this.enryptPassword(plainText) == this.hashed_password;
  },

  encryptPassword: function(password) {
    if(!password) return ''
    try {
      return crypto.createHmac('sha1', this.salt)
                   .update(password)
                   .digest('hex');
    } catch (err) {
      return '';
    }
  },


  makeSalt: function() {
    return Math.round(new Date().valueOf() * Math.random()) + '';
  }

}

// export 'User' model based on userSchema
module.exports = mongoose.model('User', userSchema);
