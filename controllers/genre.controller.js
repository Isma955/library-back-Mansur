const Genre = require("../models/Genre.model")

module.exports.genreController = {
    createGenre: async (req,res) => {
        // создание жанра
        const data = await Genre.create({
            name: req.body.name,
            description: req.body.description
        })
        res.send('Жанр добавлен')
    },
    deleteGenre: async (req,res) => {
        // удаление жанра
        const data = await Genre.findByIdAndDelete(req.params.id)
        res.json('Genre delete')
    },
    getGenre: async (req,res) => {
        // вывод всех жанров
        const data = await Genre.find({})
        res.json(data)
    }
}