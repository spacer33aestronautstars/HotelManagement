const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set static folder for CSS, JS, Images
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('pages/home');  // Renders views/pages/home.ejs
});

// Example POST route for availability check (optional)
app.post('/check-availability', (req, res) => {
  const { checkin, checkout, adults, children } = req.body;
  // You can handle availability logic here later
  res.send(`Checking availability for ${adults} adults and ${children} children from ${checkin} to ${checkout}`);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
