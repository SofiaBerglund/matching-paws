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
    type: Number
    // required: true
  },
  catOk: {
    type: Boolean
  },
  dogOk: {
    type: Boolean
  },
  image: String
})

app.get("/", (req, res) => {
  res.send("Animals API")
})

app.get("/animals", (req, res) => {
  Animal.find().then(animals => {
    res.json(animals)
  })
})

app.post("/animals/search", (req, res) => {
  const options = {
    sex: { $in: req.body.sex },
    size: { $in: req.body.size }
    // age: req.body.age, add if-statement here as well
  }
  if (req.body.catOk) {
    options.catOk = req.body.catOk
  }
  if (req.body.dogOk) {
    options.dogOk = req.body.dogOk
  }

  Animal.find(options)
    .then(animals => {
      res.json({ animals })
    })
    .catch(err => {
      res.json(err)
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
