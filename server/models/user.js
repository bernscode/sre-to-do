// Use Mongoose for schema
const mongoose = require('mongoose');

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
// methods > authenticate, encryptPassword, makeSalt
// export user model
