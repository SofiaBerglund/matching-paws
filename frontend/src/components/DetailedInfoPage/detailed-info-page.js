import React from "react"
import "./detailed-info-page.scss"

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

    const { sex, size, age, image } = animalObject

    return (
      <div className="detailed-info-wrapper">
        <div className="detailed-info-container">
          <h1>Det här är {animalObject.name}!</h1>
          <img src={image} />
          <h3>{animalObject.name} söker</h3>
          <p>{animalObject.description}</p>
          <p>Kön: {sex.charAt(0).toUpperCase() + sex.slice(1)}</p>
          <p>Storlek: {size.charAt(0).toUpperCase() + size.slice(1)}</p>
          <p>Ålder: {age.charAt(0).toUpperCase() + age.slice(1)}</p>
          <div className="submit-button">
            <img id="paw-print" src="./paw-print2.png" />
            <a href="mailto:intresseanmalan@matching-paws.com">
              Intresseanmälan
            </a>
          </div>
        </div>
      </div>
    )
  }
}
