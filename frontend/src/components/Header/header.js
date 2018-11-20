import React from "react"
import "./header.scss"

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
          <h1>Header</h1>
            <input
              id="hamburger"
              className="hamburger-checkbox"
              type="checkbox" />
              <div className="hamburger-container">
            <label htmlFor="hamburger" className="hamburger-label">
              <div className="hamburger-bar1" />
              <div className="hamburger-bar2" />
              <div className="hamburger-bar3" />
            </label>
          </div>
          <nav className="navbar-list">
            <a className="link-item" href="#"> Om oss </a>
            <a className="link-item" href="#"> Logga in </a>
            <a className="link-item" href="#"> Kontakt </a>
          </nav>
        </header>
      </div>
    )
  }
}
