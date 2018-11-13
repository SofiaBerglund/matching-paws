import React from "react"
import { Link } from "react-router-dom"
const animals = "http://localhost:8080/animals"

export default class StartPage extends React.Component {
  state = {
    animals: [],
    filteredAnimals: []
  }

  checkedBox = e => {
    this.setState({
      animals: e.target.value
    })
  }

  //Hur filterar vi enligt icheckade boxar?
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
            <label>Hane</label>
            <input
              type="checkbox"
              name="sex"
              value={this.state.animals}
              onChange={this.checkedBox}
            />
            <label>Tik</label>
            <input type="checkbox" name="sex" />
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
