import React from "react";

function Dinner(props) {
    return (
        <div>
            <h1>We are serving {props.dish}</h1>
            <h1>We are serving sweet {props.sweet}</h1>
        </div>
    )
}

export default Dinner;