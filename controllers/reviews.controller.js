const Reviews = require("../models/Reviews.model")

module.exports.reviewsController = {

    createReview: async (req,res) => {
        // добавление рецензии
        const data = await Reviews.create({
            text: req.body.text,
            authorName: req.body.authorName,
            book: req.body.book
        })
        res.json('Review create')
    },
    deleteReview: async (req,res) => {
        // удаление рецензии
        const data = await Reviews.findByIdAndDelete(req.params.id)
        res.json("Review delete")
    },
    getReview: async (req,res) => {
        // вывод рецензии определенной книги
        const data = await Reviews.find({ book:req.params.id})
        res.json(data)
    }

}