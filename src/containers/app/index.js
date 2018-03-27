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
    </main>
  </div>
)

export default App
