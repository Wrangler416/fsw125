import React, {useState, useEffect} from "react"
import axios from "axios"
import AddSailboatForm from "./components/AddSailboat"
import Sailboat from "./components/Sailboat"
import "./index.css"


function App(props) {

    const [sailboats, setSailboats] = useState([])

        function getSailboats(){
            axios.get("/sailboats")
                 .then(res => setSailboats(res.data))
                 .catch(err => console.log(err.res.data.errMsg))
        }

        function addSailboat(newSailboat) {
            axios.post("/sailboats", newSailboat)
                .then(res => {setSailboats(prevSailboats => [...prevSailboats, res.data])})
                .catch(err => console.log(err))
        }

        function deleteSailboat(sailboatId) {
            axios.delete(`/sailboats/${sailboatId}`)
                .then(res => {setSailboats(prevSailboats => prevSailboats.filter(sailboat => sailboat._id !== sailboatId))})
                .catch(err => console.log(err))
        }

        function editSailboat(updates, sailboatId){
            axios.put(`/sailboats/${sailboatId}`, updates)
            .then(res => {
                setSailboats(prevSailboats=> prevSailboats.map(sailboat => sailboat._id !== sailboatId ? sailboat : res.data))
    
            })
            .catch(err => console.log(err))
        }


        useEffect(() => {
            getSailboats()
        }, [])

return (

    <div>

        <h1>Production Sailboats</h1>

        <section className="form">
            <AddSailboatForm 
                submit={addSailboat}
            />
        </section>

        <section className="body">
            
            {sailboats.map(sailboat => 
            <Sailboat 
            {...sailboat}
            key = {sailboat.make}
            deleteSailboat={deleteSailboat}
            editSailboat={editSailboat}

        />)}
        </section>
    </div>
)
}
export default App 