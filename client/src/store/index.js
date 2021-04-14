import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import AuthReducer from '../store/reducers/AuthReducer'
import UserReducer from '../store/reducers/UserReducer'
import ThemeReducer from '../store/reducers/ThemeReducer'
import ReviewReducer from '../store/reducers/ReviewReducer'
import EditorReducer from '../store/reducers/EditorReducer'

import thunk from 'redux-thunk'

let middleware
if (process.env.NODE_ENV === 'production') {
  middleware = applyMiddleware(thunk)
} else {
  middleware = composeWithDevTools(applyMiddleware(thunk))
}

const store = createStore(
  combineReducers({
    authState: AuthReducer,
    userState: UserReducer,
    themeState: ThemeReducer,
    reviewState: ReviewReducer,
    editorState: EditorReducer
  }),
  middleware
)

export default store
