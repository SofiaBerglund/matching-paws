import React from "react"
import "./header.scss"
import { Link } from "react-router-dom"

export default class Header extends React.Component {
  handleOnClick = e => {
    window.location.reload(true)
  }

  render() {
    return (
      <div>
        <header className="header">
          <input
            id="hamburger"
            className="hamburger-checkbox"
            type="checkbox"
          />
          <div className="hamburger-container">
            <img id="paw-print-header" src="./paw-print5.png" />
            <h1>Matching Paws</h1>
            <label htmlFor="hamburger" className="hamburger-label">
              <div className="hamburger-bar1" />
              <div className="hamburger-bar2" />
              <div className="hamburger-bar3" />
            </label>
          </div>
          <ul className="navbar-list">
            <Link to="/">
              <li id="home-link" onClick={this.handleOnClick}> Hem </li>
            </Link>
            <Link to="/aboutus">
              <li onClick={this.handleOnClick}> Om oss </li>
            </Link>
            <Link to="/login">
              <li onClick={this.handleOnClick}> Logga in </li>
            </Link>
            <Link to="/contact">
              <li onClick={this.handleOnClick}> Kontakt </li>
            </Link>
          </ul>
        </header>
      </div>
    )
  }
}
