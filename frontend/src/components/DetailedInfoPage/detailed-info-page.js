import React from "react"
import "./detailed-info-page.scss"
const filteredAnimals =
  process.env.NODE_ENV === "production"
    ? "https://matching-paws.herokuapp.com/animals/"
    : "http://localhost:8080/animals/"

export default class DetailedInfoPage extends React.Component {
  state = {
    detailedInfo: null
  }

  componentDidMount() {
    const details = `http://localhost:8080/animals/${
      this.props.match.params.id
    }`
    fetch(details)
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(json => {
        this.setState({
          detailedInfo: json
        })
      })
  }

  render() {
    if (!this.state.detailedInfo) {
      return <div> loading</div>
    }

    const { name, sex, size, age, image, description } = this.state.detailedInfo
    return (
      <div className="detailed-info-wrapper">
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
