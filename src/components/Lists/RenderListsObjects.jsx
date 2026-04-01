import React from "react";

function RenderListsObjects() {
    const states = [
        {
            name: "Kosovo",
            surname: "Prishtina",
            age: 18
        },
        {
            name: "Kosovo",
            surname: "  Prishtina",
            age: 18
        },
        {
            name: "Kosovo",
            surname: "  Prishtina",
            age: 18,

        }
    ];

    return (
        <div>

            {
                states.map((student) => (
                    <div>
                        <p>{student.name}</p>
                        <p>{student.surname}</p>
                        <p>{student.age}</p>
                        <hr />
                    </div>
                ))
            }

        </div>
    )
}

export default RenderListsObjects;