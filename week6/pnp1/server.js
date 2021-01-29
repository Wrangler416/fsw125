const express = require("express")
const app = express()

app.use(express.json())

app.use("/wine", require("./wineRouter"))
app.use("/search/type", require("./wineRouter"))

app.listen(8000, () => { console.log("This server is running on port 8000") })

