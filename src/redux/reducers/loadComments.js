import {LOAD_COMMENTS, DELETE_COMMENT} from '../constants/index.js'

const initState = {
    comments: [],
    loading: false,
    isOpen: false
}

const loadComments = (comments = initState, action) => {
    switch(action.type) {
        case LOAD_COMMENTS:
            return  {
                ...comments,
                comments: action.payload,
                loading: false,
                isOpen: false
            }
            case DELETE_COMMENT: 
                return {
                ...comments,
                comments: comments.comments.filter(comment => comment.id !== action.payload.id)
                }
            
      
           
        default:
        return comments
    }
    
}

export default loadComments





