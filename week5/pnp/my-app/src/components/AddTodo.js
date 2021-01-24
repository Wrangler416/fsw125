import React, {useState} from 'react'


function AddTodoF(props) {
    const initialInput = {title: "", description: ""}
    const [input, setInput] = useState(initialInput)

    function handleChange(e) {
        const {name, value} = e.target
        setInput(prevInput => ({...prevInput, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.AddTodo(input)
        setInput(initialInput)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="title"
                    value={input.title}
                    onChange={handleChange}
                    placeholder="Title"
                />

                <input 
                    type="text"
                    name="description"
                    value={input.description}
                    onChange={handleChange}
                    placeholder="Description"
                />   

                <button>Add To Do</button> 
            </form>
        </div>
    )
}

export default AddTodoF
