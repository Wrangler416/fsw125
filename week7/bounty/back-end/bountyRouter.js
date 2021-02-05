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
        res.status(200)
        res.send(bounties)
    })

    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.status(201).send(newBounty)
    })

bountyRouter.route('/:bountyId')

    .get((req, res, next) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    if(!foundBounty){
        const error = new Error(`The item with id ${bountyId} was not found`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundBounty)
})

    .put((req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndexP = bounties.findIndex(bounty => bounty._id === bountyId)
    const updateBounty = Object.assign(bounties[bountyIndexP], req.body)
    res.status(201).send(updateBounty)
})

    .delete((req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)    
    bounties.splice(bountyIndex, 1)
    res.send("You deleted a bounty")
})

module.exports = bountyRouter


