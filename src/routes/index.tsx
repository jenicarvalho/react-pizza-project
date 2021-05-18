import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import { createBrowserHistory } from "history"
import Home from '../pages/Home'
import Order from '../pages/Order'
import Finished from '../pages/Finished'
import Size from '../pages/Size'
import Flavor from '../pages/Flavor'

const history = createBrowserHistory()

history.listen(_ => {
  window.scrollTo(0, 0)  
})

const Routes = () => (
  <Router history={history}>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/order" exact component={Order} />
        <Route path="/finished" exact component={Finished} />
        <Route path="/choose-pizza-size" exact component={Size} />
        <Route path="/choose-pizza-flavor" exact component={Flavor} />
    </Switch>
  </Router>
)

export default Routes
