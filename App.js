const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Define an array of user objects
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  { id: 4, name: 'sam', email: 'sam@example.com' },
  { id: 5, name: 'mark', email: 'mark@example.com' },

];

// Define route handler for the Get Users API
app.get('/users', (req, res) => {
  // Respond with retrieved user data in JSON format
  res.json(users);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});