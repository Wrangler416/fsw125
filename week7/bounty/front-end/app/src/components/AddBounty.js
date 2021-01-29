import React, {useState} from 'react'


function AddBountyF(props) {
    const initialInput = {fName: "", lName: ""}
    const [input, setInput] = useState(initialInput)

    function handleChange(e) {
        const {name, value} = e.target
        setInput(prevInput => ({...prevInput, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(input, props._id)
        setInput(initialInput)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="fName"
                    value={input.fName}
                    onChange={handleChange}
                    placeholder="First Name"
                />

                <input 
                    type="text"
                    name="lName"
                    value={input.lName}
                    onChange={handleChange}
                    placeholder="Last Name"
                />   

                <button>{props.btnText}</button> 
            </form>
        </div>
    )
}

export default AddBountyF
