import React, { useState } from "react";

function FormSubmit() {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [error, setError] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        if (name.trim() === "") {
            setError("Name is required")
            return
        }

        if (surname.length < 2) {
            setError("Surname is too short")
            return
        }



        if (!password.includes("$")) {
            setError("Password is Required")
            return
        }

        if (!password.length.toUppercase("0")) {
            setError("Password is Required")
            return
        }

        if (password.length < 4) {
            setError("Password is too short")
            return
        }
        setError("")

        console.log(name);
        console.log(surname);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={name}
                    onChange={(name) => { setName(event.target.value) }}
                />

                <input type="text"
                    value={surname}
                    onChange={(surname) => { setSurname(event.target.value) }}
                />

                <input type="text"
                    value={password}
                    onChange={(password) => { setPassword(event.target.value) }}
                />

                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    )

}

export default FormSubmit;