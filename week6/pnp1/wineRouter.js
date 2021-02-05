const express = require("express")
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

const wine = [

    {type: "cabernet", _id: uuidv4()},
    {type: "port", _id: uuidv4()},
    {type: "rose", _id: uuidv4()},
    {type: "chardonnay", _id: uuidv4()},
    {type: "pinot grigio", _id: uuidv4()},
    {type: "pinot noir", _id: uuidv4()}
]

router.route("/").get((req,res) => {
    res.send(wine)
})

router.route("/:id").get((req, res) => {
    const id = req.params.id
    const foundWine = wine.find(wine => wine._id === id)
    res.send(foundWine)
})


router.route("/search/type").get((req, res) => {
    const type = req.query.type
    const filteredWine = wine.filter(wine => wine.type === type)
    res.send(filteredWine)
})




module.exports = router

