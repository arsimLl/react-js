import React, { useState } from "react";

function UseStateComponent() {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(true);
    const [countDisabled, setCountDisabled] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                <p>{count}</p>
            </button>


            <button onClick={() => setCount(count - 1)}>
                <p>{count}</p>
            </button>


            <button onClick={() => setCount(0)}>
                <p>{count}</p>
            </button>

            <button onClick={() => setIsOn(!isOn)}>
                {isOn ? "ON" : "OFF"}
            </button>
            {
                isOn && <p>Hide Me</p>
            }

            {
                count === 10 && <p>you reached max {count}</p>
            }

            <button onClick={() => setCount(count + 1)}>
                <p style={{ color: count > 10 ? "red" : "black" }}>{count}</p>
            </button>


            <button onClick={() => setCount(count + 1)} disabled={countDisabled}>
                <p>{count > 10 ? "Max Reached" : count}</p>
            </button>




        </div>


    );

};


export default UseStateComponent;