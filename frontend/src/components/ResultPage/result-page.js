import React from "react"
import { Link } from "react-router-dom"
import "./result-page.scss"
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
        <h1>Dina matchningar!</h1>
        {this.state.animals.map(animal => (
          <div>
            <h4>{animal.name}</h4>
            <img src={animal.image} alt="" />
            <p>Kön: {animal.sex}</p>
          </div>
        ))}
      </div>
    )
  }
}
