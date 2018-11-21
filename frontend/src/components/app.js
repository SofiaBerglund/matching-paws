import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Header from "./Header/header"
import StartPage from "./StartPage/start-page"
import AboutUs from "./AboutUs/aboutus"
import Contact from "./Contact/contact"
import LogIn from "./LogIn/login"
import DetailedInfoPage from "./DetailedInfoPage/detailed-info-page"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={StartPage} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/results/:id" component={DetailedInfoPage} />
        </div>
      </Router>
    )
  }
}

export default App
