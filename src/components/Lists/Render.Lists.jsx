import React from "react";

function RenderLists() {
    const states = ["Kosovo", "Albania", "Germany"];

    return (
        <div>

            <ul>
                {
                    states.map((state, index) => (
                        <li key={index}>
                            {state} {index}
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}

export default RenderLists;