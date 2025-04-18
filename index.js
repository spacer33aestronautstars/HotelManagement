const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set static folder for CSS, JS, images
app.use(express.static(path.join(__dirname, 'public')));

// Routes

app.get('/', (req, res) => {
  res.render('pages/home');  // This will look for views/pages/home.ejs
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
