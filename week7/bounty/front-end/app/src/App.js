import axios from "axios"
import React, {useState, useEffect} from "react" 
import Bounty from "./components/Bounty"
import AddBountyF from "./components/AddBounty"
import "./index.css"

function App() {
    const [bounties, setBounties] = useState([])

    // GET request function 

    function getBounties(){
        axios.get("/bounties")
        .then(res => setBounties(res.data))
        .catch(err => console.log(err))
    }

    // Add (POST) a Bounty 

    function AddBounty(newBounty){
        axios.post("/bounties", newBounty)
        .then(res => {
            setBounties(prevBounties => [...prevBounties, res.data])})
        .catch(err => console.log(err))
    }

    // DELETE a Bounty 

    function DeleteBounty(bountyId){
        axios.delete(`/bounties/${bountyId}`)
        .then(res => {
            setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
        })
        .catch(err => console.log(err))
    }

    // EDIT A Bounty 

    function EditBounty(updates, bountyId){
        axios.put(`/bounties/${bountyId}`, updates)
        .then(res => {
            setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))

        })
        .catch(err => console.log(err))
    }


    // Execute GET request 

    useEffect(() => {
        getBounties()
    }, [])


    return (
        <div>
            <h1>The Original Bounty Hunter</h1>
            <AddBountyF 
                submit={AddBounty} 
                btnText="Add Bounty"
            />

           {
            bounties.map(bounty => 
            <Bounty
            {...bounty} 
            key = {bounty.fName}
            DeleteBounty={DeleteBounty}
            EditBounty={EditBounty}
            
            />)
            
            }
            
        </div>
    )
}

export default App 