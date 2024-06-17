const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB= require('./config/db');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');
const bodyParser = require('body-parser');
connectDB();

const app  = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});