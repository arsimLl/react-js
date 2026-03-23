import React from "react";

function StatusMessage({ isOnline }) {
    return (
        <div>
            {isOnline ? <p>User is online</p> : <p>User is offline</p>}
        </div>
    )
}

export default StatusMessage;