import React, { useEffect, useState } from "react";

function UseEffect() {
    const [count, setCount] = useState(0);
    const [employees, setEmployees] = useState([
        { id: 1, firstName: "Arsim", role: "Instructor" },
        { id: 2, firstName: "Egzon", role: "Teacher" },
        { id: 3, firstName: "Leotrim", role: "Student" },
    ]);
    useEffect(() => {
        console.log("useEffect")
    }, [])
    useEffect(() => {
        console.log("clicked", count)
    }, [count])

    useEffect(() => {
        console.log("emp", employees)
    }, [employees])


    return (
        <div>
            <h1>Use Effect</h1>
            <button onClick={() => setCount(count + 1)}>
                <h3>Increase</h3>
            </button>
            <br></br>
            {count}
            {
                employees.map(employees => (
                    <p key={employees.id}>{employees.firstName} {employees.role}</p>
                ))
            }
        </div>
    )




}

export default UseEffect
