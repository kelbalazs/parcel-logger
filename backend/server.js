const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'))
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: "154.56.34.16",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "u677060802\_parcellogger",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

// Allow requests from localhost:3000 and localhost:3001
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);

// Routes
// ... (your existing routes)

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
