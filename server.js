const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/education', (req, res) => {
  res.render('education', { title: 'Education' });
});

app.get('/experience', (req, res) => {
  res.render('experience', { title: 'Experience' });
});

app.get('/achievements', (req, res) => {
  res.render('achievements', { title: 'Achievements' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

app.get('/resume', (req, res) => {
  res.render('resume', { title: 'Resume' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});