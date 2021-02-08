const express = require("express")
const router = express.Router()
const  {v4: uuidv4} = require("uuid")


const sailboats = [
        {make: "bavaria", model: "cruiser", type: ["sail", "aux"], isGRP: true, price: 60000, _id: uuidv4()},
        {make: "beneteau", model: "first", type: ["sail", "aux"], isGRP: true, price: 100000, _id: uuidv4()},
        {make: "oyster", model: "offshore", type: ["sail", "aux", "gen"], isGRP: false, price: 600000,_id: uuidv4()},
        {make: "beneteau", model: "oceanis", type: ["sail", "aux"], isGRP: true, price: 90000,_id: uuidv4()},
        {make: "hunter", model: "vision", type: ["sail", "aux"], isGRP: true, price: 40000,_id: uuidv4()},
        {make: "hunter", model: "legend", type: ["sail", "aux"], isGRP: false, price: 40000, _id: uuidv4()},
        {make: "hylas", model: "classic", type: ["sail", "aux", "gen"], isGRP: true, price: 450000,_id: uuidv4()}
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

router.route('/:sailboatId').get((req, res, next) => {
            const sailboatId = req.params.sailboatId
            const findSailboat = sailboats.find(sailboat => sailboat._id === sailboatId)
            if(!findSailboat) {
                const error = new Error (`The item with id ${sailboatId} was  not found`)
                res.status(500)
                return next(error)
            }
            res.status(200).send(findSailboat)
        })

router.route('/:sailboatId').put((req, res) => {
            const sailboatId = req.params.sailboatId
            const sailboatIndex = sailboats.findIndex(sailboat => sailboat._id === sailboatId)
            const editSailboat = Object.assign(sailboats[sailboatIndex], req.body)
            res.status(201).send(editSailboat)
        })

router.route("/:sailboatId").delete((req, res) => {
            const sailboatId = req.params.sailboatId
            const sailboatIndexDelete = sailboats.findIndex(sailboat => sailboat._id === sailboatId)
            sailboats.splice(sailboatIndexDelete, 1)
            res.send("Sailboat Deleted")
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




module.exports = router

