const Genre = require("../models/Genre.model")

module.exports.genreController = {
    createGenre: async (req,res) => {
        // создание жанра
        const data = await Genre.create({
            name: req.body.name,
            description: req.body.description
        })
        res.send('Жанр добавлен')
    }
}