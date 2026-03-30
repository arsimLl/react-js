import React from "react";

function DarkMode() {
    const [darkMode, setDarkMode] = React.useState(false);
    function onDarkMode() {
        setDarkMode(darkMode => !darkMode);
    }
    return (
        <div style={{
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
        }}>
            <button onClick={onDarkMode}>
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
            <p>{darkMode ? "Dark" : "Light"} Mode</p>
        </div>
    );
}

export default DarkMode;