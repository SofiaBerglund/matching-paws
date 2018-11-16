import React from "react"
import { Link } from "react-router-dom"
import "./result-page.scss"
const animals = "http://localhost:8080/animals"

export default class ResultPage extends React.Component {
  // componentDidMount() {
  //   fetch(animals)
  //     .then(response => response.json())
  //     .then(json => {
  //       this.setState({
  //         animals: json
  //       })
  //     })
  // }

  render() {
    return (
      <div>
        <h1>Dina matchningar!</h1>
        <div>
          <h4>{this.props.name}</h4>
        </div>
      </div>
    )
  }
}
