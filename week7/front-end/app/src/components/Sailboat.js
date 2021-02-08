import React, {useState} from "react"
import AddSailboatForm from "./AddSailboat"

function Sailboat(props) {
    const {make, model, _id} = props 
    const [editToggle, setEditToggle] = useState(false)


    return (
        <div>
            {!editToggle ?

                <>

                <h1>{make} {model}</h1>

                <button onclick={() => props.deleteSailboat(_id)} className="delete">Delete Sailboat</button>
                <button onclick={()=> setEditToggle(prevToggle => !prevToggle)} className="edit">Edit Sailboat</button>

                </>
                :
                <>

                <AddSailboatForm 
                    make={make}
                    model={model}
                    _id={_id}
                    submit={props.editSailboat}
                    btnText="Submit Edit"
                />

                <button onclick={() => setEditToggle(prevToggle => !prevToggle)}>Close Edit</button>
                </>
            }
        </div>
    )
}

export default Sailboat
