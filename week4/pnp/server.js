const express = require("express")
const app = express()


app.use(express.json())

app.use("/bounties", require("./bountyRouter.js"))

app.listen(9000, () => {
    console.log("This server is running on port 9000")
})

