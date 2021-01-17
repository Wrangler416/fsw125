const express = require("express")
const app = express()


app.use(express.json())

app.use("/todos", require("./todoRouter.js"))

app.listen(7000, () => {
    console.log("This server is running on port 7000")
})

