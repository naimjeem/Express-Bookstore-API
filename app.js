const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Genre = require('./models/genre');
const Book = require('./models/book');

let app = express();

mongoose.connect('mongodb://localhost/bookstore');

let db = mongoose.connection;

app.get('/', (req, res) => {
  res.send('express');
});

app.get('/api/genres', (req, res) => {
  Genre.getGenres((err, genres) => {
    if (err) throw err;
    res.json(genres);
  });
});

app.get('/api/books', (req, res) => {
  Book.getBooks((err, books) => {
    if (err) throw err;
    res.json(books);
  });
});

//Set Port
const port = process.env.PORT || '3001';
app.set('port', port);

app.listen(port);
