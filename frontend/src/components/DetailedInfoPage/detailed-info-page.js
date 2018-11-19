import React from "react"

export default class DetailedInfoPage extends React.Component {
  state = {
    detailedInfo: []
  }

  render() {
    //steg 1. hämta id från props
    const id = this.props.match.params.id

    //steg 2. hämta all data från localstorage
    const animalDataString = localStorage.getItem("stored animals")

    const animalData = JSON.parse(animalDataString)

    //steg 3. ta ut hund med hjälp av id från all data
    let animalObject

    animalData.animals.forEach(element => {
      if (id === element._id) {
        animalObject = element
      }
    })

    return (
      <div>
        <h1>Detaljerad information</h1>
        <img src={this.state.detailedInfo.image} />
        <img src={animalObject.image} />
        <p>{animalObject.description}</p>
      </div>
    )
  }
}
