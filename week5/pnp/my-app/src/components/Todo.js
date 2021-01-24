import React from 'react'

function Todo(props) {
    const {title, description, imageUrl, _id} = props 
    return (
        <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <p>{imageUrl}</p>
            <button onClick={() => props.DeleteTodo(_id)}>Delete</button>
        </div>
    )
}

export default Todo
