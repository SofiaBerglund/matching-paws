import React from "react"

export default class DetailedInfoPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Detaljerad information</h1>
        <img src={this.props.image} />
      </div>
    )
  }
}
