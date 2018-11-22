import React from "react"
import "./header.scss"
import { Link } from "react-router-dom"

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.checkBox = React.createRef()
  }

  handleOnClick = e => {
    this.checkBox.current.checked = false
  }

  render() {
    return (
      <div>
        <header className="header">
          <input
            id="hamburger"
            className="hamburger-checkbox"
            type="checkbox"
            ref={this.checkBox}
          />
          <div className="hamburger-container">
            <Link to="/">
              <img id="paw-print-header" src="./paw-print5.png" alt="" />
            </Link>
            <h1>Matching Paws</h1>
            <label htmlFor="hamburger" className="hamburger-label">
              <div className="hamburger-bar1" />
              <div className="hamburger-bar2" />
              <div className="hamburger-bar3" />
            </label>
          </div>
          <ul className="navbar-list">
            <Link to="/">
              <li id="home-link" onClick={this.handleOnClick}>
                {" "}
                Hem{" "}
              </li>
            </Link>
            <Link to="/aboutus">
              <li onClick={this.handleOnClick}> Om oss </li>
            </Link>
            <Link to="/login">
              <li onClick={this.handleOnClick}> Logga in </li>
            </Link>
          </ul>
        </header>
      </div>
    )
  }
}
