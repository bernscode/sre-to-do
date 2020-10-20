const {validationResult} = require('express-validator');

// next is a callback function
exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    // code 422 is an unprocessable entity
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }
  next();
};
