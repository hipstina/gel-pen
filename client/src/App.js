import React from 'react'
import EditorPage from './screens/EditorPage'
import Nav from './components/Nav'
import ProfilePage from './screens/ProfilePage'
import ThemePage from './screens/ThemePage'
import Login from './components/Login'
import Register from './components/Register'
import { Switch, Route } from 'react-router-dom'

import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={EditorPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/themes/:theme_id" component={ThemePage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </main>
    </div>
  )
}

export default App
