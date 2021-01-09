const express = require("express");
const app = express();

const users = [
    {name: "john", age: 65},
    {name: "mary", age: 45},
    {name: "steve", age: 37},
    {name: "mike", age: 49}

]

const sailboats = [
    {name: "bavaria"},
    {name: "beneteau"},
    {name: "oyster"},
    {name: "hylas"}

]
 
const powerboats = [
    {name: "yellowfin"},
    {name: "boston whaler"},
    {name: "donzi"},
    {name: "contender"}
]

app.get("/users", (req, res) => {
    res.send(users);
})

app.get("/sailboats", (req, res) => {
    res.send(sailboats);
})

app.get("/powerboats", (req, res) => {
    res.send(powerboats);
})

app.listen(8000, () => {
    console.log("the server is running on 8000")
} )