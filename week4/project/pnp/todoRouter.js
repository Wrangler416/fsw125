const express = require("express")
const todoRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const todos = [
    
    {title: "Boat", description: "De rust the stainless steel",  imageUrl: "https://previews.123rf.com/images/snehit/snehit1606/snehit160600121/62317082-old-rusty-boat.jpg"  , completed: false, _id: uuidv4()},
    {title: "Dog", description: "Groom the mutt",  imageUrl: "https://static3.bigstockphoto.com/1/5/1/large1500/1515618.jpg" , completed: false, _id: uuidv4()},
    {title: "Exercise", description: "Go the the Gym",  imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhlcmNpc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"  , completed: false, _id: uuidv4()},
    {title: "Shopping", description: "Groceries",  imageUrl: "" , completed: false, _id: uuidv4()}
]


//Get List endpoint and Add new Todo 

todoRouter.route("/")


    .get((req, res) => {
        res.send(todos)
    })

    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuidv4()
        todos.push(newTodo)
        res.send(`You added ${newTodo.title } to the database!`)
    })


//Get specific todo, update a Todo or delete a Todo 

todoRouter.route('/:todoId')
   

    .get((req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

    .delete((req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)    
    todos.splice(todoIndex, 1)
    res.send("You deleted this item ")
})
    .put((req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updateTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updateTodo)
})

module.exports = todoRouter
