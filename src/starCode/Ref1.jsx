import React from "react";
import { useState,useRef } from "react";


function AppRef(){
    const [count,setCount]=useState(0);
    const countRef = useRef(0);

    console.log(countRef)



    console.log("렌더링Chk")
    function increaseCountState(){
        setCount(count+1);
    
    };

    function increaseCountRef(){
        countRef.current=countRef.current+1
        console.log("ref",countRef.current)
    }

    return (
        <div>
            <p>state : {count}</p>
            <p>Ref : {countRef.current}</p>
            <button onClick={increaseCountState}>State +1</button>
            <button onClick={increaseCountRef}>Ref +1</button>
        </div>
    );
}

export default AppRef;
