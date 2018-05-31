const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
const keys = require('./config/keys');
const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);
app.listen(PORT);