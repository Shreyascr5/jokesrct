import React from "react";

export default function Jokes(props){
    return(
        <>
        <h3 > Setup: {props.setup}</h3>
        <h3  >Punchline: {props.punchline}</h3>
        <hr/>
        </>
    )
}