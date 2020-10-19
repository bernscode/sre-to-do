const express = require('express');

// to use all get and post requests
const router = express.Router();




router.get('/register', (req, res) => {
  res.json({
    data: 'you hit register endpoint middleware...'
  });
});


// export to server
module.exports = router;
