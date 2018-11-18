import React from "react"
import { Link } from "react-router-dom"
import "./start-page.scss"
import ResultPage from "../ResultPage/result-page"
const filteredAnimals = "http://localhost:8080/animals/search"

export default class StartPage extends React.Component {
  state = {
    sex: [],
    size: [],
    age: [],
    catOk: false,
    dogOk: false,
    filteredSearch: [],
    show: true,
    showResults: false
  }

  handleChecked = e => {
    //generic function for all multi-choice input elements. Adds or removes values to state arrays
    const newInput = e.target.name
    const newValue = e.target.value
    if (this.state[newInput].includes(newValue)) {
      //if box is checked, remove item from array when unchecked
      const newValues = this.state[newInput].filter(item => item !== newValue)
      this.setState({ [newInput]: newValues })
    } else {
      //add item to array when box is checked
      this.setState({
        [newInput]: [...this.state[newInput], newValue]
      })
    }
  }

  handleCheckedOtherAnimal = e => {
    //function for true or false input elements
    const newInput = e.target.name
    if (this.state[newInput]) {
      this.setState({ [newInput]: false })
    } else {
      this.setState({ [newInput]: true })
    }
  }

  findAnimals = event => {
    const { sex, size, age, catOk, dogOk } = this.state
    event.preventDefault()
    fetch(filteredAnimals, {
      method: "post",
      //removed age for now because the function can't handle an empty array. figure out how to include in filter
      body: JSON.stringify({ sex, size, catOk, dogOk }),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({
          filteredSearch: json,
          show: false,
          showResults: true
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.show && (
          <div>
            <h1>Sök hund</h1>
            <form onSubmit={this.findAnimals}>
              Kön:
              <div>
                <label>Tik</label>
                <input
                  type="checkbox"
                  name="sex"
                  value="tik"
                  checked={this.state.sex.includes("tik")}
                  onChange={this.handleChecked}
                />
                <label>Hane</label>
                <input
                  type="checkbox"
                  name="sex"
                  value="hane"
                  checked={this.state.sex.includes("hane")}
                  onChange={this.handleChecked}
                />
              </div>
              Storlek:
              <div>
                <label>Liten</label>
                <input
                  type="checkbox"
                  name="size"
                  value="liten"
                  checked={this.state.size.includes("liten")}
                  onChange={this.handleChecked}
                />
                <label>Mellan</label>
                <input
                  type="checkbox"
                  name="size"
                  value="mellan"
                  checked={this.state.size.includes("mellan")}
                  onChange={this.handleChecked}
                />
                <label>Stor</label>
                <input
                  type="checkbox"
                  name="size"
                  value="stor"
                  checked={this.state.size.includes("stor")}
                  onChange={this.handleChecked}
                />
              </div>
              Ålder:
              <div>
                <label>0-3 år</label>
                <input
                  type="checkbox"
                  name="age"
                  value="0-3"
                  checked={this.state.age.includes("0-3")}
                  onChange={this.handleChecked}
                />
                <label>4-6 år</label>
                <input
                  type="checkbox"
                  name="age"
                  value="4-6"
                  checked={this.state.age.includes("4-6")}
                  onChange={this.handleChecked}
                />
                <label>6+ år</label>
                <input
                  type="checkbox"
                  name="age"
                  value="6+"
                  checked={this.state.age.includes("6+")}
                  onChange={this.handleChecked}
                />
              </div>
              Måste kunna bo med katt:
              <div>
                <label>Ja</label>
                <input
                  type="checkbox"
                  name="catOk"
                  value="yes"
                  checked={this.state.catOk === true}
                  onChange={this.handleCheckedOtherAnimal}
                />
              </div>
              Måste kunna bo med hund:
              <div>
                <label>Ja</label>
                <input
                  type="checkbox"
                  name="dogOk"
                  value="yes"
                  checked={this.state.dogOk === true}
                  onChange={this.handleCheckedOtherAnimal}
                />
              </div>
              <input type="submit" value="Hitta hund" />
            </form>
          </div>
        )}
        {this.state.showResults && (
          <div>
            {console.log("hej från showResults")}
            {/* {this.state.showResults ? results : noResults} */}
            {this.state.filteredSearch.animals.map(animal => {
              return <p>{animal.name}</p>
            })}
          </div>
        )}
      </div>
    )
  }
}
