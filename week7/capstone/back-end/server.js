const express = require("express")
const app = express()
const router = require("./sailboatRouter")

app.use(express.json())

app.use("/sailboats", router)
app.use("/make", router)

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8000, () => {
    console.log("This server is running on port 8000")
})

