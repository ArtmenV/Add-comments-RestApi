import {LOAD_COMMENTS, DELETE_COMMENT} from '../constants/index.js'
import axios from 'axios';


export const actionComments = () => async dispatch => {
   const loadComment = await axios.get('https://jsonplaceholder.typicode.com/posts')
   
    return dispatch ({
        type: LOAD_COMMENTS,
        payload: loadComment.data
    })
}

export const deleteComments = (id) => {
    return ({
        type: DELETE_COMMENT,
        payload: {id}
    })
}
