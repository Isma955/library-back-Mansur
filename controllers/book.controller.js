const Book = require("../models/Book.model")

module.exports.bookController = {
    createBook: async (req,res) => {
        // добавление книги
        const data = await Book.create({
            name: {
                type: req.body.type,
                required: req.body.required
            },
            author: {
                ref: req.body.ref,
                type: req.body.type
            },
            genre: {
                ref: req.body.ref,
                type: req.body.type
            }
        })
        res.json('Книга добавлена')
    }
}