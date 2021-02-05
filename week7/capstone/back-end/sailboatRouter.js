const express = require("express")
const router = express.Router()
const  {v4: uuidv4} = require("uuid")


const sailboats = [
        {make: "bavaria", model: "cruiser", type: "sloop", _id: uuidv4()},
        {make: "beneteau", model: "first", type: "sloop", _id: uuidv4()},
        {make: "oyster", model: "offshore", type: "cutter", _id: uuidv4()},
        {make: "beneteau", model: "oceanis", type: "sloop", _id: uuidv4()},
        {make: "hunter", model: "vision", type: "sloop", _id: uuidv4()},
        {make: "hunter", model: "legend", type: "ketch", _id: uuidv4()},
        {make: "hylas", model: "classic", type: "ketch", _id: uuidv4()}
]

router.route("/")

        .get((req, res) => {
            res.status(200).send(sailboats)
        })
        .post((req, res) => {
            const newSailboat = req.body
            newSailboat._id = uuidv4()
            sailboats.push(newSailboat)
            res.status(201).send(newSailboat)
        })

router.route("/make").get((req, res, next) => {
            const make = req.query.make
            if(!make) {
                const error = new Error("Please provide a make")
                res.status(500)
                return next(error)
            }
            const filterSailboat = sailboats.filter(sailboat => sailboat.make === make)
            res.send(filterSailboat)
                
        })


router.route("/:sailboatId")
        .get((req, res, next) => {
            const sailboatId = req.params.sailboatId
            const findSailboat = sailboats.find(sailboat => sailboat._id === sailboatId)
            if(!findSailboat) {
                const error = new Error (`The item with id ${sailboatId} was  not found`)
                res.status(500)
                return next(error)
            }
            res.status(200).send(findSailboat)
        })

        .put((req, res) => {
            const sailboatId = req.params.sailboatId
            const sailboatIndex = sailboats.findIndex(sailboat => sailboat._id === sailboatId)
            const updateSailboat = Object.assign(sailboats[sailboatIndex], req.body)
            res.status(201).send(updateSailboat)
        })

        .delete((req, res) => {
            const sailboatId = req.params.sailboatId
            const sailboatIndexDelete = sailboats.findIndex(sailboat => sailboat._id === sailboatId)
            sailboats.splice(sailboatIndexDelete, 1)
            res.send("Sailboat Deleted")
        })



module.exports = router

