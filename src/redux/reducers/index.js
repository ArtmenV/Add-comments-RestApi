import { combineReducers } from 'redux'
import loadComments from './loadComments'
import deleteComments from './deleteComment'

export default combineReducers({
    loadComments,
    deleteComments
})