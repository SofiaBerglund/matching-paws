import React from "react"
import { Link } from "react-router-dom"
import "./result-page.scss"

export default class ResultPage extends React.Component {
  state = {
    searchResult: this.props
  }

  render() {
    const { name, image, sex, size, age, id } = this.props
    return (
      <div className="result-page-wrapper">
        <div className="result-page-container">
          <Link to={`/results/${id}`}>
            <h2>{name}</h2>
            <img src={image} alt="" />
            <p>Kön: {sex.charAt(0).toUpperCase() + sex.slice(1)}</p>
            <p>Storlek: {size.charAt(0).toUpperCase() + size.slice(1)}</p>
            <p>Ålder: {age.charAt(0).toUpperCase() + age.slice(1)}</p>
            <div className="submit-button">
              <img id="paw-print" src="./vit-tass.png" alt="" />
              <input type="submit" value="Läs mer!" />
            </div>
          </Link>
        </div>
      </div>
    )
  }
}
