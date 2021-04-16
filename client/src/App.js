import React, { useEffect } from 'react'
import EditorPage from './screens/EditorPage'
import Nav from './components/Nav'
import ProfilePage from './screens/ProfilePage'
import ThemePage from './screens/ThemePage'
import Login from './components/Login'
import Register from './components/Register'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './styles/App.css'
import { CheckSession } from './store/actions/AuthActions'
import { GetThemesByUser } from './store/actions/UserActions'

const mapStateToProps = (state) => {
  return {
    authState: state.authState,
    userState: state.userState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    checkSession: (input) => dispatch(CheckSession(input)),
    getThemes: (id) => dispatch(GetThemesByUser(id))
  }
}

function App(props) {
  useEffect(() => {
    props.checkSession(localStorage.getItem('token'))
    props.getThemes(props.userState.current_user_id)
    // eslint-disable-next-line
  }, [props.userState.current_user_id])

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

export default connect(mapStateToProps, mapDispatchToProps)(App)
