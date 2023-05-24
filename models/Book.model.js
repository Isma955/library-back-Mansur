const mongoose = require("mongoose");


const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        ref: "author",
        type: mongoose.SchemaType.ObjectId
    },
    genre: {
        ref: "genre",
        type: mongoose.SchemaType.ObjectId
    }
    
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
