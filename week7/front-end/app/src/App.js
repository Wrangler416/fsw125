import React, {useState, useEffect} from "react"
import axios from "axios"
import AddSailboatForm from "./components/AddSailboat"
import Sailboat from "./components/Sailboat"
import "./index.css"


function App() {

    const [sailboats, setSailboats] = useState([])

        function getSailboats(){
            axios.get("/sailboats")
                 .then(res => setSailboats(res.data))
                 .catch(err => console.log(err.res.data.errMsg))
        }

        function addSailboat(newSailboat) {
            axios.post("/sailboats", newSailboat)
                .then(res => setSailboats(prevSailboats => [...prevSailboats, res.data]))
                .catch(err => console.log(err.res.data.errMsg))
        }

        function deleteSailboat(sailboatId) {
            axios.delete(`/sailboats, ${sailboatId}`)
                .then(res => setSailboats(prevSailboats => prevSailboats.filter(sailboat => sailboat._id !== sailboatId)))
                .catch(err => console.log(err.res.data.errMsg))
        }

        function editSailboat(updates, sailboatId) {
            axios.put(`/sailboats, ${sailboatId}`)
                .then(res => setSailboats(prevSailboats => prevSailboats.map(sailboat => sailboat._id !== sailboatId ? sailboat : res.data)))
                .catch(err => console.log(err.res.data.errMsg))
        }


// Get Sailboat Data

        useEffect(() => {
            getSailboats()
        }, [])




return (


    <div>

        <h1>Best Production Sailboats Of All Time</h1>

        {sailboats.map(sailboat => 
        <Sailboat 
        {...sailboat}
        key={sailboat.make}
        deleteSailboat={deleteSailboat}
        editSailboat={editSailboat}

        />)}



        <AddSailboatForm 
        submit={addSailboat}
        />

    </div>
)

}

export default App 