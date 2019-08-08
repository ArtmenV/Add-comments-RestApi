import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import { actionComments, deleteComments } from '../redux/ac/index.js'
import Comment from './comment'

const Comments = ({comments, actionComments, deleteComments}) => {

     useEffect(() =>{
        actionComments();
     }, [])


     const deleta = (id) => {
        deleteComments(id)
        }
    return (
        <>
            <button>Логин</button>
                <ul>
                    {comments.comments.map(comment => (
                        <li key={comment.id}>
                            <Comment 
                            comment={comment}
                            />
                            <button onClick={() => deleta(comment.id)}>deletе button</button>
                        </li>
                    ))}
                </ul>
        </>
    )
}

export default connect(state => ({
    comments: state.loadComments
}), {actionComments, deleteComments})(Comments)