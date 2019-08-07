// Setting Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Book schema 
const booksSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: String,
    hyperlink: String,
    image: String,
    date: { type: Date, default: Date.now }

});
// creates books database with booksSchema 
const  Books= mongoose.model("Books", booksSchema);

module.exports = Books;