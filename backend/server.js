import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
app.use(bodyParser.json())
app.use(cors())

const mongoUrl = "mongodb://localhost/project-work"
mongoose.connect(mongoUrl, { useNewUrlParser: true })
mongoose.Promise = Promise // Allows mongo to use javascript promises

const Animal = mongoose.model("Animal", {
  Name: String,
  Sex: {
    type: String,
    required: true
  },
  Size: {
    type: String,
    required: true
  },
  Age: {
    type: Number,
    required: true
  },
  CatOk: {
    type: Boolean,
    required: true
  },
  DogOk: {
    type: Boolean,
    required: true
  }
})

app.get("/", (req, res) => {
  res.send("Animals API")
})

app.listen(8080, () => { // .listen is a express funcition
  console.log("Server running!")
})
