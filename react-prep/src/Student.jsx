import { useEffect, useState } from "react";

function Student(props) {
    useEffect(() => {
        console.log("Child component receiving")
    },[])

    return (
        <div>
            <h1>This is a simple child component</h1>
            <button onClick={props.sendData}>
                Click me
            </button>
        </div>
    );
}

export default Student