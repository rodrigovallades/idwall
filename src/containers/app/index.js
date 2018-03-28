import React from 'react';
import { Route } from 'react-router-dom'

import Signin from '../signin'
import Feed from '../feed'

import './app.css'

const App = () => (
  <div className='wrapper'>
    <header>THE IDDOG</header>
    <main>
      <Route exact path="/" component={Signin} />
      <Route exact path="/feed" render={(props) => ( <Feed {...props} category='husky' /> )} />
      <Route exact path="/husky" render={(props) => ( <Feed {...props} category='husky'/> )} />
      <Route exact path="/labrador" render={(props) => ( <Feed {...props} category='labrador' /> )} />
      <Route exact path="/hound" render={(props) => ( <Feed {...props} category='hound'/> )} />
      <Route exact path="/pug" render={(props) => ( <Feed {...props} category='pug'/> )} />
    </main>
  </div>
)

export default App
