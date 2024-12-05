const express = require('express');
const sql = require('mssql');

const app = express();
const port = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// SQL Server configuration for Windows Authentication
const sqlConfig = {
  user: '',      // Leave empty for Windows Authentication (no username required)
  password: '',  // Leave empty for Windows Authentication (no password required)
  server: 'localhost',  // Or the server where your database is hosted
  database: 'BookManagement', // Replace with your database name
  options: {
    encrypt: true, // Use encryption
    trustServerCertificate: true, // Trust the server certificate
  },
};

// Test the connection to the SQL Server
sql.connect(sqlConfig, (err) => {
  if (err) {
    console.log('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Example API endpoint to get books
app.get('/api/books', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM Books');  // Replace with your actual table name
    res.json(result.recordset);  // Send the data as a JSON response
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving books', error: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
