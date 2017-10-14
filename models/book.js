const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String
  },
  pages: {
    type: String
  },
  img_url: {
    type: String,
    required: true
  },
  buy_url: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

const Book = module.exports = mongoose.model('Book', bookSchema);

module.exports.getBooks = (callback, limit) => {
  Book.find(callback).limit(limit);
}

module.exports.getBookById = (id, callback) => {
  Book.findById(id, callback);
}

// Add Book
module.exports.addBook = (book, callback) => {
  Book.create(book, callback);
}
