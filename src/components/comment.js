import React from 'react'

const Comment = ({comment}) => {

return(
        <>
            <h3>{comment.name}</h3>
            <h5>{comment.body}</h5>
        </>
    )
}
export default Comment

