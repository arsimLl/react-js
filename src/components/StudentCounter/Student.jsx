import React, { useState } from "react";
import "./StudentCounter.css"

function StudentCounter() {
    const [count, setCount] = useState(0);

    return (
        <div className="card">
            <h2>Student Counter</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, cum!</p>

            <div className="counter">
                <h1>{count}</h1>
            </div>

            <div className="btn-group">
                <button onClick={() => setCount(count + 1)} className="btn-green">
                    + Increase
                </button>
                <button onClick={() => setCount(count - 1)} className="btn-red">
                    - Decrease
                </button>
                <button onClick={() => setCount(0)} className="btn-gray">
                    Reset
                </button>
            </div>
        </div>
    );
}

export default StudentCounter;