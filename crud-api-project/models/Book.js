const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publishedYear: { type: Number },
  pages: { type: Number },
  price: { type: Number },
  stock: { type: Number },
});

module.exports = mongoose.model('Book', bookSchema);
