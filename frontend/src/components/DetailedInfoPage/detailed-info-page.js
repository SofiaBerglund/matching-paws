import React from "react"

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
      <div>
        <h1>Detaljerad information</h1>
        <h2>{animalObject.name}</h2>
        <img src={animalObject.image} />
        <p>{animalObject.description}</p>
      </div>
    )
  }
}
