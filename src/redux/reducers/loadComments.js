import {LOAD_COMMENTS, DELETE_COMMENT} from '../constants/index.js'

const loadComments = (comments=[], action) => {
    const {type, payload} = action
    switch(type) {
        case LOAD_COMMENTS:
            return action.payload
            
        case DELETE_COMMENT: 
                   
             return comments.filter(comment => comment.id !== payload.id)
        
        
            default:
            return comments
    }
}

export default loadComments