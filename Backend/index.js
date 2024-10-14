const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db')
const path = require('path');
require('dotenv').config(); 
const authRoutes = require('./routes/authRoutes');
const petRoutes = require('./routes/petRoute');

const app = express();
connectDB();

app.use(bodyParser.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/api/auth', authRoutes);
app.use('/api/pets', petRoutes);
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
