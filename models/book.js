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

// Get Book List
module.exports.getBooks = (callback, limit) => {
  Book.find(callback).limit(limit);
}

// Get a Single Book
module.exports.getBookById = (id, callback) => {
  Book.findById(id, callback);
}

// Add Book
module.exports.addBook = (book, callback) => {
  Book.create(book, callback);
}

// Update Book
module.exports.updateBook = (id, book, options, callback) => {
	let query = {_id: id};
	let update = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author,
		publisher: book.publisher,
		pages: book.pages,
		image_url: book.image_url,
		buy_url: book.buy_url
	}
	Book.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeBook = (id, callback) => {
	let query = {_id: id};
	Book.remove(query, callback);
}
