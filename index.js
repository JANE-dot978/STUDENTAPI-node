const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./helpers/init_mongodb');
const app = express();

const studentRoutes = require('./routes/studentRoutes');
const userroutes = require('./routes/userroutes');

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use(express.json());

// ✅ Mount user routes at /api so it matches frontend
app.use('/api', userroutes);
app.use('/api/students', studentRoutes);  

// ✅ Student routes (if needed)
app.use(studentRoutes);

// 404 handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Global error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(process.env.PORT || 4000, () => {
  console.log('Now listening on http://localhost:4000');
});
