import React from "react"
import { Link } from "react-router-dom"
const animals = "http://localhost:8080/animals"

export default class ResultPage extends React.Component {
  state = {
    animals: []
  }

  componentDidMount() {
    fetch(animals)
      .then(response => response.json())
      .then(json => {
        this.setState({
          animals: json
        })
      })
  }

  render() {
    return (
      <div>
        <h1>hej</h1>
        {this.state.animals.map(animal => (
          <div>
            <p animal={animal.name}>{animal.name}</p>
            <img src={animal.image} />
          </div>
        ))}
      </div>
    )
  }
}