import React from "react"
import "./start-page.scss"
import { Link } from "react-router-dom"
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
    filteredSearch: []
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
        // localStorage.setItem("stored animals", JSON.stringify(json))
        this.setState({
          filteredSearch: json,
          show: false,
          showResults: true
        })
      })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.history.push(
      `/results?sex=${this.state.sex}&age=${this.state.age}&size=${
        this.state.size
      }&catOK=${this.state.catOk}&dogOk=${this.state.dogOk}`
    )
  }

  render() {
    return (
      <div>
        <div className="search-page-wrapper">
          <div className="search-container">
            <h1>Sök hund</h1>

            <form className="myForm3" onSubmit={this.handleSubmit}>
              <h3>Kön:</h3>
              <div className="search-container-sex">
                <div className="checkbox-container-wrapper">
                  <label>Tik</label>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      name="sex"
                      value="tik"
                      checked={this.state.sex.includes("tik")}
                      onChange={this.handleChecked}
                    />
                  </div>
                </div>
                <div className="checkbox-container-wrapper">
                  <label>Hane</label>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      name="sex"
                      value="hane"
                      checked={this.state.sex.includes("hane")}
                      onChange={this.handleChecked}
                    />
                  </div>
                </div>
              </div>
              <h3>Storlek:</h3>
              <div className="search-container-size">
                <div className="checkbox-container-wrapper">
                  <label>Liten</label>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      name="size"
                      value="liten"
                      checked={this.state.size.includes("liten")}
                      onChange={this.handleChecked}
                    />
                  </div>
                </div>
                <div className="checkbox-container-wrapper">
                  <label>Mellan</label>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      name="size"
                      value="mellan"
                      checked={this.state.size.includes("mellan")}
                      onChange={this.handleChecked}
                    />
                  </div>
                </div>
                <div className="checkbox-container-wrapper">
                  <label>Stor</label>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      name="size"
                      value="stor"
                      checked={this.state.size.includes("stor")}
                      onChange={this.handleChecked}
                    />
                  </div>
                </div>
              </div>
              <h3>Ålder:</h3>
              <div className="search-container-age">
                <div className="checkbox-container-wrapper">
                  <label>0-3 år</label>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      name="age"
                      value="0-3 år"
                      checked={this.state.age.includes("0-3 år")}
                      onChange={this.handleChecked}
                    />
                  </div>
                </div>
                <div className="checkbox-container-wrapper">
                  <label>4-6 år</label>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      name="age"
                      value="4-6 år"
                      checked={this.state.age.includes("4-6 år")}
                      onChange={this.handleChecked}
                    />
                  </div>
                </div>
                <div className="checkbox-container-wrapper">
                  <label>6+ år</label>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      name="age"
                      value="6+ år"
                      checked={this.state.age.includes("6+ år")}
                      onChange={this.handleChecked}
                    />
                  </div>
                </div>
              </div>
              <h3>Måste kunna bo med:</h3>
              <div className="search-container-catOk">
                <div className="checkbox-container-wrapper">
                  <label>Katt</label>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      name="catOk"
                      value="yes"
                      checked={this.state.catOk === true}
                      onChange={this.handleCheckedOtherAnimal}
                    />
                  </div>
                </div>
                <div className="checkbox-container-wrapper">
                  <label>Hund</label>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      name="dogOk"
                      value="yes"
                      checked={this.state.dogOk === true}
                      onChange={this.handleCheckedOtherAnimal}
                    />
                  </div>
                </div>
              </div>
              <Link
                to={`/results?sex=${this.state.sex}&age=${
                  this.state.age
                }&size=${this.state.size}&catOK=${this.state.catOk}&dogOk=${
                  this.state.dogOk
                }`}>
                <div className="submit-button">
                  <img id="paw-print" src="./vit-tass.png" alt="" />
                  <input type="submit" value="Hitta hund" />
                </div>
              </Link>
            </form>
          </div>
          )}
        </div>
      </div>
    )
  }
}
