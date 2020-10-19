// build server with express
const express = require('express');

const app = express();


// import routes
const authRoutes = require('./routes/auth');


// middlewares, code to run in the middle
app.use('/api', authRoutes);



const port = process.env.PORT || 8000;



app.listen(port, () => console.log('API is running on port ${port}'));
