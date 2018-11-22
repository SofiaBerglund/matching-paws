import React from "react"
import { Link } from "react-router-dom"
import "./result-page.scss"
import queryString from "query-string"
const filteredAnimals =
  process.env.NODE_ENV === "production"
    ? "https://matching-paws.herokuapp.com/animals/search"
    : "http://localhost:8080/animals/search"

export default class ResultPage extends React.Component {
  state = {
    searchResults: []
  }

  componentDidMount() {
    const filters = queryString.parse(this.props.location.search)
    console.log(filters)
    const body = JSON.stringify({
      sex: filters.sex.split(","),
      age: filters.age.split(","),
      size: filters.size.split(","),
      catOk: filters.catOk === "true" ? true : false,
      dogOk: filters.dogOk === "true" ? true : false
    })
    console.log(body)
    fetch(filteredAnimals, {
      method: "post",
      body,
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(json => {
        this.setState({
          searchResults: json.animals
        })
      })
  }

  render() {
    return (
      <div>
        <div className="results-header">
          <h1>Dina matchningar!</h1>
        </div>

        <div className="matches-container">
          {this.state.searchResults.length === 0 ? (
            <p>Tyvärr hittar vi inga matchningar</p>
          ) : (
            this.state.searchResults.map(item => {
              return (
                <div className="result-page-wrapper">
                  <div className="result-page-container">
                    <Link to={`/results/${item._id}`}>
                      <h2>{item.name}</h2>
                      <div className="image-container">
                        <img src={item.image} alt="" />
                      </div>
                      <p>
                        Kön:
                        {item.sex.charAt(0).toUpperCase() + item.sex.slice(1)}
                      </p>
                      <p>
                        Storlek:
                        {item.size.charAt(0).toUpperCase() + item.size.slice(1)}
                      </p>
                      <p>
                        Ålder:
                        {item.age.charAt(0).toUpperCase() + item.age.slice(1)}
                      </p>
                      <div className="submit-button">
                        <img id="paw-print" src="./vit-tass.png" alt="" />
                        <input type="submit" value="Läs mer!" />
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    )
  }
}
