import React, { Component } from 'react'
import Homepage from './pages/Homepage'
import TvShow from './pages/TvShow'
import ActorCredits from './pages/ActorCredits'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <header></header>
        <main>
          <Router>
            <Switch>
              <Route exact path="/" component={Homepage}></Route>
              <Route exact path="/:results" component={TvShow}></Route>
              <Route
                exact
                path="/:results/:actors"
                component={ActorCredits}
              ></Route>
            </Switch>
          </Router>
        </main>
      </>
    )
  }
}

export default App
