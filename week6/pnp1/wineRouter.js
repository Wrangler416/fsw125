const express = require("express")
const wineRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const wine = [

    {type: "cabernet", _id: uuidv4()},
    {type: "port", _id: uuidv4()},
    {type: "rose", _id: uuidv4()},
    {type: "chardonnay", _id: uuidv4()},
    {type: "pinot grigio", _id: uuidv4()},
    {type: "pinot noir", _id: uuidv4()}
]

wineRouter.route("/").get((req, res) => {
    res.send(wine)
})

wineRouter.route("/").get("/:id", (req, res) => {
    const id = req.params.id
    const foundWine = wine.find(wine => wine._id === id)
    res.send(foundWine)
})

wineRouter.route("/").get("/search/type", (req, res) => {
    var type = req.query.type
    const filteredWine = wine.filter(wine => wine.type === type)
    res.send(filteredWine)
})

module.exports = wineRouter

