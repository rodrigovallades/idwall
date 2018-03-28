import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import Signin from '../signin'
import Feed from '../feed'

import './app.css'

const App = () => (
  <div className='wrapper'>
    <header>THE IDDOG</header>
    <main>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/husky" render={(props) => ( <Feed category='husky'/> )} />
        <Route exact path="/labrador" render={(props) => ( <Feed category='labrador'/> )} />
        <Route exact path="/hound" render={(props) => ( <Feed category='hound'/> )} />
        <Route exact path="/pug" render={(props) => ( <Feed category='pug'/> )} />
        <Redirect from="*" to="/" />
        <Route component={Signin}/>
      </Switch>
    </main>
  </div>
)

export default App
