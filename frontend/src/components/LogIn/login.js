import React from "react"
import "./login.scss"

class LogIn extends React.Component {
  render() {
    return (
      <div>
        <div className="login-wrapper">
          <div className="login-container">
            <h1>Logga in</h1>
            <p>
              Snart kommer det bli möjligt att registrera sig som användare. Då
              kommer det bli möjligt att göra anpassade inställningar samt själv
              lägga upp hundar som behöver ett hem.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default LogIn
