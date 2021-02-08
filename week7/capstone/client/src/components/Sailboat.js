import React, {useState} from "react"
import AddSailboatForm from "./AddSailboat"
import App from "../App"

function Sailboat(props) {
    const {make, model, _id} = props 
    const [editToggle, setEditToggle] = useState(false)


    return (
        <div>
            {!editToggle ?

                <>

                <h1>{make} {model}</h1>

                <button onClick={() => props.deleteSailboat(_id)} className="delete">Delete</button>
                <button onClick={()=> setEditToggle(prevToggle => !prevToggle)} className="edit">Edit</button>

                </>
                :
                <>

                <AddSailboatForm 
                    make={make}
                    model={model}
                    _id={_id}
                    submit={props.editSailboat}
                    btnText="Submit"

                />

                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close Edit</button>
                </>
            }
        </div>
    )
}

export default Sailboat
