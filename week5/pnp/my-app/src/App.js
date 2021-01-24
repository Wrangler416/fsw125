import axios from "axios"
import React, {useState, useEffect} from "react" 
import Todo from "./components/Todo"
import AddTodoF from "./components/AddTodo"

function App() {
    const [todos, setTodos] = useState([])

    function getTodos(){
        axios.get("/todos")
        .then(res => setTodos(res.data))
        .catch(err => console.log(err))
    }

    function AddTodo(newTodo){
        axios.post("/todos", newTodo)
        .then(res => {
            setTodos(prevTodos => [...prevTodos, res.data])})
        .catch(err => console.log(err))

    }

    function DeleteTodo(todoId){
        axios.delete(`/todos/${todoId}`)
        .then(res => {
            setTodos(prevTodos => prevTodos.filter(todo => todo._id === todoId))
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getTodos()
    }, [])



    return (
        <div>
            <AddTodoF 
                AddTodo={AddTodo} 
            />

           {
            todos.map(todo => 
            <Todo 
            {...todo} 
            key = {todo.title}
            DeleteTodo={DeleteTodo}
            
            />)
            
            }
            
        </div>
    )
}

export default App 