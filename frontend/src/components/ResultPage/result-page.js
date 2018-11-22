import React from "react"
import { Link } from "react-router-dom"
import "./result-page.scss"
import queryString from "query-string"
import DetailedInfoPage from "../DetailedInfoPage/detailed-info-page"
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
      //removed age for now because the function can't handle an empty array. figure out how to include in filter
      body,
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(json => {
        // localStorage.setItem("stored animals", JSON.stringify(json))
        this.setState({
          searchResults: json
        })
      })
  }

  render() {
    return <div>results page</div>
  }
}
//   render() {
//     const { name, image, sex, size, age, id } = this.props
//     return (
//       <div className="result-page-wrapper">
//         <div className="result-page-container">
//           <Link to={`/results/${id}`}>
//             <h2>{name}</h2>
//             <div className="image-container">
//               <img src={image} alt="" />
//             </div>
//             <p>Kön: {sex.charAt(0).toUpperCase() + sex.slice(1)}</p>
//             <p>Storlek: {size.charAt(0).toUpperCase() + size.slice(1)}</p>
//             <p>Ålder: {age.charAt(0).toUpperCase() + age.slice(1)}</p>
//             <div className="submit-button">
//               <img id="paw-print" src="./vit-tass.png" alt="" />
//               <input type="submit" value="Läs mer!" />
//             </div>
//           </Link>
//         </div>
//       </div>
//     )
//   }
//
