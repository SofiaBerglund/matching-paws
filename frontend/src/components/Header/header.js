import React from "react"
import "./header.scss"

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
        <button className="navbar-toggle">
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
    )
  }
}
