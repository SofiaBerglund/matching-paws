import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Header from "./Header/header"
import StartPage from "./StartPage/start-page"
import ResultPage from "./ResultPage/result-page"
import DetailedInfoPage from "./DetailedInfoPage/detailed-info-page"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={StartPage} />
          {/* <Route exact path="/results" component={ResultPage} /> */}
          <Route exact path="/results/:id" component={DetailedInfoPage} />
        </div>
      </Router>
    )
  }
}

export default App
