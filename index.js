const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/author.route"))
app.use(require("./routes/book.route"))
app.use(require("./routes/genre.route"))
app.use(require("./routes/reviews.route"))


mongoose
  .connect(
    "mongodb+srv://shishanee:shishanee95@cluster0.3rfuohv.mongodb.net/library?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));


app.listen(3000, () => {
    console.log('Сервер запущен успешно')
})