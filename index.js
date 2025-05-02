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
  res.render('pages/home'); // assuming you have views/pages/home.ejs
});



// Example POST route for availability check (optional)
app.post('/check-availability', (req, res) => {
  const { checkin, checkout, adults, children } = req.body;
  // You can handle availability logic here later
  res.send(`Checking availability for ${adults} adults and ${children} children from ${checkin} to ${checkout}`);
});

app.get('/facilities', (req, res) => {
  res.render('pages/facilities');
});

app.get('/rooms', (req, res) => {
  res.render('pages/rooms');
});

app.get('/contact', (req, res) => {
  res.render('pages/contact');
});

app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log(`Contact form submitted by ${name} (${email}) - Subject: ${subject}`);
  res.send("Thank you for reaching out! We'll get back to you soon.");
});

app.get('/about', (req, res) => {
  res.render('pages/about');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
