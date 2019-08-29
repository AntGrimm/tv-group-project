import React, { Component } from 'react'
import Homepage from './pages/Homepage'
import TvShow from './pages/TvShow'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>TV Shows!</h1>
        </header>
        <main>
          <Router>
            <Switch>
              <Route exact path="/" component={Homepage}></Route>
              <Route exact path="/tvShow" component={TvShow}></Route>
            </Switch>
          </Router>
        </main>
      </>
    )
  }
}

export default App
