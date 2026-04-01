import React from "react";

function Movies(props) {
    const [Movie, setMovie] = React.useState(false);
    function onMovie() {
        setMovie(Movie => !Movie);
    }
    return (
        <div style={{
            border: "1px solid orange",
            borderRadius: "10px",
            padding: "20px",
            width: "250px"
        }}>
            <h2>{props.title}</h2>
            <p>{props.director}</p>
            <p>{props.year}</p>
            <button onClick={onMovie}>
                {Movie ? "Watch" : "Watch On Netflix"}
            </button>
        </div>                                                                                                                            
    );
}


export default Movies;