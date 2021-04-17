import React, { useEffect } from 'react'
import EditorPage from './screens/EditorPage'
import Nav from './components/Nav'
import ProfilePage from './screens/ProfilePage'
import ThemePage from './screens/ThemePage'
import BrowsePage from './screens/BrowsePage'
import Login from './components/Login'
import Register from './components/Register'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './styles/App.css'
import { CheckSession } from './store/actions/AuthActions'
import { GetThemesByUser } from './store/actions/UserActions'
import { GetAllThemes } from './store/actions/ThemeActions'

const mapStateToProps = (state) => {
  return {
    authState: state.authState,
    userState: state.userState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    checkSession: (input) => dispatch(CheckSession(input)),
    getUserThemes: (id) => dispatch(GetThemesByUser(id)),
    getThemes: () => dispatch(GetAllThemes())
  }
}

function App(props) {
  useEffect(() => {
    props.checkSession(localStorage.getItem('token'))
    props.getUserThemes(props.userState.current_user_id)
    props.getThemes()
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
          <Route path="/browse" component={BrowsePage} />
        </Switch>
      </main>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
