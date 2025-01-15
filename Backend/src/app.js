
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const connectDB = require('./config/db');
const { errorHandler } = require('./middlewares/errorHandler');


const userRoutes = require('./routes/user.route');
const petRoutes = require('./routes/pet.route');
const adminRoutes = require('./routes/admin.route');


const app = express();


connectDB();


app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/admin', adminRoutes);


app.use(errorHandler);

module.exports = app;