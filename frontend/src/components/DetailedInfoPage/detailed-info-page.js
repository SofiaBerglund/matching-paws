import React from "react"
import "./detailed-info-page.scss"
import { Link } from "react-router-dom"

export default class DetailedInfoPage extends React.Component {
  state = {
    detailedInfo: []
  }

  render() {
    const id = this.props.match.params.id

    const animalDataString = localStorage.getItem("stored animals")

    const animalData = JSON.parse(animalDataString)

    let animalObject

    animalData.animals.forEach(element => {
      if (id === element._id) {
        animalObject = element
      }
    })

    const { name, sex, size, age, image, description } = animalObject

    return (
      <div className="detailed-info-wrapper">
        <Link to={`/results/`}>
          <div className="back-button" onClick={this.handleOnClick}>
            <h3>Tillbaka till resultat</h3>
          </div>
        </Link>
        <div className="detailed-info-container">
          <h1>Det här är {name}!</h1>
          <img src={image} alt="" />
          <h3>{name} söker</h3>
          <p>{description}</p>
          <p>Kön: {sex.charAt(0).toUpperCase() + sex.slice(1)}</p>
          <p>Storlek: {size.charAt(0).toUpperCase() + size.slice(1)}</p>
          <p>Ålder: {age.charAt(0).toUpperCase() + age.slice(1)}</p>
          <div className="interest-button">
            <img id="paw-print" src="./vit-tass.png" alt="" />
            <a href="mailto:intresseanmalan@matching-paws.com">
              Intresseanmälan
            </a>
          </div>
        </div>
      </div>
    )
  }
}
