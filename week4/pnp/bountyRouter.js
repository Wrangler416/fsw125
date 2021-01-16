const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const bounties = [
    
    {fName: "Kanan", lName: "Jaris", isAlive: true, number: 10, type: "Jedi", _id: uuidv4()},
    {fName: "Raynar", lName: "Thul", isAlive: true, number: 20, type: "Jedi", _id: uuidv4()},
    {fName: "Tenel", lName: "Ka", isAlive: true, number: 50, type: "Jedi", _id: uuidv4()},
    {fName: "Anakin", lName: "Skywalker", isAlive: true, number: 100, type: "Jedi", _id: uuidv4()}
]

bountyRouter.route("/")

    .get((req, res) => {
        res.send(bounties)
    })

    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(`You added ${newBounty.fName } to the database!`)
    })

bountyRouter.route('/:bountyId')
    .get((req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

    .delete((req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Yay, deleted ")
})

module.exports = bountyRouter
