const express = require("express")
const app = express()
const router = require("./wineRouter")


app.use(express.json())

app.use("/wine", router)
app.use("/search/type", router)

app.listen(9000, () => { console.log("This server is running on port 9000") })

