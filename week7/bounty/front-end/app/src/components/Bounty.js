import React, {useState} from 'react'
import AddBountyF from "./AddBounty"

function Bounty(props) {
    const {fName, lName, _id} = props 
    const [editToggle, setEditToggle] = useState(false)
   
    return (
        <div>
            {!editToggle ?
            <>
            <h1>{fName} {lName}</h1>
            <button 
                className="delete-btn"
                onClick={() => props.DeleteBounty(_id)}>
                Delete
            </button>
            <button
                className="edit-btn"
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Edit
            </button>
            </>
            :
            <>
            <AddBountyF
                fName={fName}
                lName={lName} 
                btnText="Submit Edit"
                submit={props.EditBounty}
                _id={_id}
            />
            <button
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
            }
        </div>
    )
}

export default Bounty


