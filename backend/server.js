import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
app.use(bodyParser.json())
app.use(cors())

const mongoUrl = "mongodb://localhost/project-work"
mongoose.connect(
  mongoUrl,
  { useNewUrlParser: true }
)
mongoose.Promise = Promise

const Animal = mongoose.model("Animal", {
  name: String,
  sex: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  catOk: {
    type: Boolean,
    required: true
  },
  dogOk: {
    type: Boolean,
    required: true
  },
  image: String
})

app.get("/", (req, res) => {
  res.send("Animals API")
})

app.get("/animals", (req, res) => {
  console.log("hello")
  Animal.find().then(animals => {
    res.json(animals)
  })
})

app.post("/animals", (req, res) => {
  const animal = new Animal(req.body)
  animal
    .save()
    .then(() => {
      res.status(201).send("Animal added")
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

app.listen(8080, () => {
  console.log("Server running!")
})
