const express = require('express');
const userRoutes = require('./routes/userRoutes.js');
const photoRoutes = require('./routes/photoRoutes.js');
const commentRoutes = require('./routes/commentRoutes');
const socialMediaRoutes = require('./routes/socialMediaRoutes.js');
const authRoutes = require('./routes/authRoutes');
const port = 8000;
const app = express();

app.listen(port, () => {
  console.log('Listening on port: ', port);
});