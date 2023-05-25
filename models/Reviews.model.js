const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema({
    text: String,
    authorName: String,
    book: {
     type: mongoose.SchemaTypes.ObjectId,
    ref: "Book"
  }
  
});

const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Reviews;
