const Author = require("../models/Author.model");

module.exports.authorController = {
  createAuthor: async (req, res) => {
    // создание автора
    const data = await Author.create({
      name: req.body.name,
      info: req.body.info,
    });
    res.send('Автор добавлен')
  },
};
