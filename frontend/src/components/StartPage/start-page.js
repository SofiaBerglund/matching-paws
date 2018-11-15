import React from "react"
import { Link } from "react-router-dom"
import "./start-page.scss"
const animals = "http://localhost:8080/animals"

export default class StartPage extends React.Component {
  state = {
    checkedSex: ["tik"],
    checkedSize: [],
    checkedAge: [],
    filteredAnimals: []
  }

  // checkedBoxSex = e => {
  //   if ()
  //   this.setState({
  //     checkedSexTik:
  //   })
  // }

  handleChecked = e => {
    //add comments create variables
    if (this.state[e.target.name].includes(e.target.value)) {
      //remove
      const newValues = this.state[e.target.name].filter(
        item => item !== e.target.value
      )
      this.setState({ [e.target.name]: newValues })
    } else {
      //add
      this.setState({
        [e.target.name]: [...this.state[e.target.name], e.target.value]
      })
    }
  }

  // Hur filterar vi enligt icheckade boxar?
  findAnimals() {
    fetch(animals)
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({
          filteredAnimals: json.data
        })
        console.log(json)
      })
  }

  render() {
    return (
      <div>
        <h1>Sök hund</h1>
        <form>
          Kön:
          <div>
            <label>Tik</label>
            <input
              type="checkbox"
              name="checkedSex"
              value="tik"
              checked={this.state.checkedSex.includes("tik")}
              onChange={this.handleChecked}
            />
            <label>Hane</label>
            <input
              type="checkbox"
              name="checkedSex"
              value="hane"
              checked={this.state.checkedSex.includes("hane")}
              onChange={this.handleChecked}
            />
          </div>
          Storlek:
          <div>
            <label>Liten</label>
            <input type="checkbox" name="size" />
            <label>Mellan</label>
            <input type="checkbox" name="size" />
            <label>Stor</label>
            <input type="checkbox" name="size" />
          </div>
          Ålder:
          <div>
            <label>0-3 år</label>
            <input type="checkbox" name="age" />
            <label>4-6 år</label>
            <input type="checkbox" name="age" />
            <label>6+ år</label>
            <input type="checkbox" name="age" />
          </div>
          Måste kunna bo med katt:
          <div>
            <label>Ja</label>
            <input type="checkbox" name="catOK" />
          </div>
          Måste kunna bo med hund:
          <div>
            <label>Ja</label>
            <input type="checkbox" name="dogOk" />
          </div>
          <input type="submit" value="Hitta hund" onSubmit={this.findAnimals} />
        </form>
      </div>
    )
  }
}
