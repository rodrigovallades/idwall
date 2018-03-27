import React from 'react';
import { Route, Link } from 'react-router-dom'

import Signup from '../signup'
import Feed from '../feed'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/feed">Feed</Link>
    </header>

    <main>
      <Route exact path="/" component={Signup} />
      <Route exact path="/feed" component={Feed} />
      <Route exact path="/husky" render={(props) => ( <Feed category='husky'/> )} />
      <Route exact path="/labrador" render={(props) => ( <Feed category='labrador'/> )} />
      <Route exact path="/hound" render={(props) => ( <Feed category='hound'/> )} />
      <Route exact path="/pug" render={(props) => ( <Feed category='pug'/> )} />
    </main>
  </div>
)

export default App
