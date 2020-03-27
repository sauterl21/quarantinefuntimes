import React, { Component } from "react"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import theme from "./theme"
import Home from "./containers/Home/index.js"
import PokerG from "./containers/Poker/index.js"

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Switch>
              <Route path="/roulette" component={PokerG} />
              <Route path="/poker" component={PokerG} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
