import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.static("public"))

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-work"
mongoose.connect(
  mongoUrl,
  { useNewUrlParser: true }
)
mongoose.Promise = Promise

mongoose.connection.once("open", () => {
  console.log("Connected to mongodb")
})

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
    type: String,
    required: true
  },
  catOk: Boolean,
  dogOk: Boolean,
  image: String,
  description: String
})

app.get("/", (req, res) => {
  res.send("Animals API")
})

app.get("/animals", (req, res) => {
  Animal.find().then(animals => {
    res.json(animals)
  })
})

app.get("/animals/:id", (req, res) => {
  Animal.findById(req.params.id).then(animal => {
    res.json(animal)
  })
})

app.post("/animals/search", (req, res) => {
  const options = {
    sex: { $in: req.body.sex },
    size: { $in: req.body.size },
    age: { $in: req.body.age }
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

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
