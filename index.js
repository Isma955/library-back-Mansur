const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

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


app.listen(4000, () => {
    console.log('Сервер запущен успешно')
})