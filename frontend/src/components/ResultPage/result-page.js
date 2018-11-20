import React from "react"
import { Link } from "react-router-dom"
import "./result-page.scss"

export default class ResultPage extends React.Component {
  state = {
    searchResult: this.props
  }

  render() {
    const { sex, size, age, id } = this.props
    return (
      <div>
        <div className="result-page-wrapper">
          <div className="result-page-container">
            <h2>{this.props.name}</h2>
            <img src={this.props.image} />
            <p>Kön: {sex.charAt(0).toUpperCase() + sex.slice(1)}</p>
            <p>Storlek: {size.charAt(0).toUpperCase() + size.slice(1)}</p>
            <p>Ålder: {age.charAt(0).toUpperCase() + age.slice(1)}</p>
            <Link to={`/results/${id}`}>
              <div className="submit-button">
                <img src="./paw-print2.png" />
                <input type="submit" value="Läs mer!" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
