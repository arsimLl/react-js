import React, { useState } from "react";

function TwoStateComponent() {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    function handleClick() {
        if (liked) {
            setLiked(false);
            setLikeCount(likeCount - 1);
        } else {
            setLiked(true);
            setLikeCount(likeCount + 1);
        }
    }

    return (
        <div style={{ textAlign: "center", padding: "40px" }}>
            <button style={{
                backgroundColor: liked ? "green" : "red",
            }} onClick={handleClick}>
                {liked ? "  Unlike" : " Like"}
            </button>
            <p>{likeCount} people like this</p>
        </div>
    );

}

export default TwoStateComponent;