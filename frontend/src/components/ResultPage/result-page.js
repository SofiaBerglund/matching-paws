import React from "react"
import { Link } from "react-router-dom"
import "./result-page.scss"
import DetailedInfoPage from "../DetailedInfoPage/detailed-info-page"

export default class ResultPage extends React.Component {
  state = {
    searchResult: this.props,
    showList: true,
    showDetails: false
  }

  handleClick = event => {
    this.setState({
      showList: false,
      showDetails: true
    })
  }

  render() {
    return (
      <div>
        {this.state.showList && (
          <div>
            <h4>{this.props.name}</h4>
            <img src={this.props.image} />
            <p>Kön: {this.props.sex}</p>
            <p>Storlek: {this.props.size}</p>
            <p>Ålder: {this.props.age}</p>
            <button onClick={this.handleClick}>Läs mer</button>
          </div>
        )}
        {this.state.showDetails && (
          <div>
            {/* <Link to={`/results/${this.props.id}`}> */}
            <DetailedInfoPage
              id={this.props._id}
              image={this.state.searchResult.image}
            />

            {/* </Link> */}
          </div>
        )}
      </div>
    )
  }
}
