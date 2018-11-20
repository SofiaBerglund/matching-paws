import React from "react"
import "./header.scss"
import { Link } from "react-router-dom"

export default class Header extends React.Component {
  state = {
    isActive: false
  }

  toggleActive = () => {
    const currentActiveState = this.state.isActive
    this.setState({ isActive: !currentActiveState })
  }

  render() {
    return (
      <div>
        <header className="header">
          <h1>Matching Paws</h1>
          <input
            id="hamburger"
            className="hamburger-checkbox"
            type="checkbox"
          />
          <div className="hamburger-container">
            <label htmlFor="hamburger" className="hamburger-label">
              <div className="hamburger-bar1" />
              <div className="hamburger-bar2" />
              <div className="hamburger-bar3" />
            </label>
          </div>
          <ul className="navbar-list">
            <Link to="/">
              <li> Hem </li>
            </Link>
            <Link to="/aboutus">
              <li> Om oss </li>
            </Link>
            <Link to="/login">
              <li> Logga in </li>
            </Link>
            <Link to="/contact">
              <li> Kontakt </li>
            </Link>
          </ul>
        </header>
      </div>
    )
  }
}
