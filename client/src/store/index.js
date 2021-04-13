import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  UserReducer,
  ThemeReducer,
  ReviewReducer,
  EditorReducer
} from './reducers'
import thunk from 'redux-thunk'

let middleware
if (process.env.NODE_ENV === 'production') {
  middleware = applyMiddleware(thunk)
} else {
  middleware = composeWithDevTools(applyMiddleware(thunk))
}

const store = createStore(
  combineReducers({
    userState: UserReducer,
    themeState: ThemeReducer,
    reviewState: ReviewReducer,
    editorState: EditorReducer
  }),
  middleware
)

export default store
