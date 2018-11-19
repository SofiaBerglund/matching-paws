import React from "react"
import { Link } from "react-router-dom"
import "./result-page.scss"

export default class ResultPage extends React.Component {
  state = {
    searchResult: this.props
  }

  render() {
    return (
      <div>
        <div className="result-page-wrapper">
          <div className="result-page-container">
            <h4>{this.props.name}</h4>
            <img src={this.props.image} />
            <p>Kön: {this.props.sex}</p>
            <p>Storlek: {this.props.size}</p>
            <p>Ålder: {this.props.age}</p>
            <Link to={`/results/${this.props.id}`}>läs mer</Link>
          </div>
        </div>
      </div>
    )
  }
}
