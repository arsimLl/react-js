import React, { useState } from "react";

function State() {
    //state type number
    const [count, setCount] = useState(0);

    //state type string
    const [name, setName] = useState("");


    //state type boolean (true or false)
    const [show, setShow] = useState(true);

    //state type array whith objects
    const [users, setUsers] = useState([
        { id: 1, firstName: "Arsim", role: "Instructor" },
        { id: 2, firstName: "Egzon", role: "student" },
        { id: 3, firstName: "Leon", role: "Teacher" },
    ]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                increases
            </button>
            <h1>{count}</h1>
            <div>
                <input type="text"
                    onChange={(event) => setName(event.target.value)}
                />
                <h1>{name}</h1>
            </div>
            <div>{show && <p>this is hidden</p>}
            </div>
            
            <div>
                {console.log(users)}
                {users.map(user =>( 
                <p key={user.id}>{user.firstName} {user.role}</p>
                ))}
            </div>

        </div>


    )
}
export default State;