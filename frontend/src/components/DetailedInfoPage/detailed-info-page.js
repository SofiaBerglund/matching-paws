import React from "react"

export default class DetailedInfoPage extends React.Component {
  state = {
    detailedInfo: []
  }

  render() {
    //steg 1. hämta id från props
    const id = this.props.match.params.id

    //steg 2. hämta all data från localstorage
    const animalData = localStorage.getItem("stored animals")

    //steg 3. ta ut hund med hjälp av id från all data
    // let animalObject =

    // if (animalData) {
    //   this.setState({
    //     detailedInfo: JSON.parse(animalData)
    //   })
    // }

    return (
      <div>
        <h1>Detaljerad information</h1>
        <img src={this.state.detailedInfo.image} />
      </div>
    )
  }
}
