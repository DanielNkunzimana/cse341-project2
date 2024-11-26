const Book = require('../models/Book');

// GET: Fetch all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST: Create a new book
exports.createBook = async (req, res) => {
  const { title, author, genre, publishedYear, pages, price, stock } = req.body;

  // Validate input
  if (!title || !author || !genre) {
    return res.status(400).json({ message: 'Title, Author, and Genre are required' });
  }

  try {
    const newBook = new Book({ title, author, genre, publishedYear, pages, price, stock });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT: Update a book
exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE: Delete a book
exports.deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Joi = require('joi');

// Validation Schema
const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  genre: Joi.string().required(),
  publishedYear: Joi.number().integer(),
  pages: Joi.number().integer(),
  price: Joi.number(),
  stock: Joi.number(),
});

// POST: Create a new book with validation
exports.createBook = async (req, res) => {
  const { error } = bookSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

