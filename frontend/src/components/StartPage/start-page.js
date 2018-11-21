import React from "react"
import "./start-page.scss"
import ResultPage from "../ResultPage/result-page"
const filteredAnimals =
  process.env.NODE_ENV === "production"
    ? "https://matching-paws.herokuapp.com/animals/search"
    : "http://localhost:8080/animals/search"

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

  findAnimals = e => {
    const { sex, size, age, catOk, dogOk } = this.state
    // const search = this.state.filteredSearch
    e.preventDefault()
    fetch(filteredAnimals, {
      method: "post",
      //removed age for now because the function can't handle an empty array. figure out how to include in filter
      body: JSON.stringify({ sex, size, age, catOk, dogOk }),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        return response.json()
      })
      .then(json => {
        localStorage.setItem("stored animals", JSON.stringify(json))
        this.setState({
          filteredSearch: json,
          show: false,
          showResults: true
        })
      })
  }

  handleOnClick = e => {
    window.location.reload()
  }

  render() {
    return (
      <div>
        <div className="search-page-wrapper">
          {this.state.show && (
            <div className="search-container">
              <h1>Sök hund</h1>
              <form className="myForm3" onSubmit={this.findAnimals}>
                <h3>Kön:</h3>
                <div className="search-container-sex">
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
                <h3>Storlek:</h3>
                <div className="search-container-size">
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
                <h3>Ålder:</h3>
                <div className="search-container-age">
                  <label>0-3 år</label>
                  <input
                    type="checkbox"
                    name="age"
                    value="0-3 år"
                    checked={this.state.age.includes("0-3 år")}
                    onChange={this.handleChecked}
                  />
                  <label>4-6 år</label>
                  <input
                    type="checkbox"
                    name="age"
                    value="4-6 år"
                    checked={this.state.age.includes("4-6 år")}
                    onChange={this.handleChecked}
                  />
                  <label>6+ år</label>
                  <input
                    type="checkbox"
                    name="age"
                    value="6+ år"
                    checked={this.state.age.includes("6+ år")}
                    onChange={this.handleChecked}
                  />
                </div>
                <h3>Måste kunna bo med:</h3>
                <div className="search-container-catOk">
                  <label>Katt</label>
                  <input
                    type="checkbox"
                    name="catOk"
                    value="yes"
                    checked={this.state.catOk === true}
                    onChange={this.handleCheckedOtherAnimal}
                  />
                  <label>Hund</label>
                  <input
                    type="checkbox"
                    name="dogOk"
                    value="yes"
                    checked={this.state.dogOk === true}
                    onChange={this.handleCheckedOtherAnimal}
                  />
                </div>
                <div className="submit-button">
                  <img id="paw-print" src="./paw-print2.png" />
                  <input type="submit" value="Hitta hund" />
                </div>
              </form>
            </div>
          )}
        </div>
        {this.state.showResults && (
          <div className="matches-container">
            <div className="submit-button" onClick={this.handleOnClick}>
              <img id="paw-print" src="./paw-print2.png" />
              <input value="Tillbaka till sök" />
            </div>
            <h1>Dina matchningar!</h1>
            {this.state.filteredSearch.animals.length === 0 ? (
              <p>Tyvärr hittar vi inga matchningar</p>
            ) : (
              this.state.filteredSearch.animals.map(animal => {
                return (
                  <ResultPage
                    id={animal._id}
                    name={animal.name}
                    sex={animal.sex}
                    size={animal.size}
                    age={animal.age}
                    image={animal.image}
                  />
                )
              })
            )}
          </div>
        )}
      </div>
    )
  }
}
