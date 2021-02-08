import React, {useState} from "react"

function AddSailboatForm(props) {
        const initialInput = {make: "", model: ""}
        const [input, setInput] = useState("")

        function handleChange(e) {
            const {name, value} = e.target
            setInput(prevInput => ({...prevInput, [name]: value}))
        }

        function handleSubmit(e){
            e.preventDefault()
            props.submit(input, props._id)
            setInput(initialInput)
        }

        return (
            <div>
                <form onSubmit={handleSubmit}>

                    <input
                     type="text"
                     name="make"
                     value={input.make}
                     onChange={handleChange}>
                    </input>

                    <input
                    type="text"
                    name="model"
                    value={input.model}
                    onChange={handleChange}
                    >
                    </input>

                    <button className="submit">{props.btnText}</button>

                </form>

            </div>
        )

}

export default AddSailboatForm