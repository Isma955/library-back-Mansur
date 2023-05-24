const mongoose = require("mongoose");



const reviewsSchema = mongoose.Schema({
    text: String,
    name: String
});

const Reviews = mongoose.model("Reviews", bookScreviews);

module.exports = Reviews;
