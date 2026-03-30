import React, { useState } from "react";

function ClickEvents() {
    const [message, setMessage] = useState("nothing here");
    function seeAllMessage() {
        setMessage("Here is the full message");
    }
    return (
        <div>
            <button onClick={seeAllMessage}>See {message}</button>
        </div>
    );
}

export default ClickEvents; 