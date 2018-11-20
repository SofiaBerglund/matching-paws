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

    return (
      <div className="detailed-info-wrapper">
        <h1>Det här är {animalObject.name}!</h1>
        <img src={animalObject.image} />
        <p>{animalObject.description}</p>
        <a href="mailto:intresseanmalan@matching-paws.com">Intresseanmälan</a>
      </div>
    )
  }
}
