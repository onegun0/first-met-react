import React from "react";
import { useEffect } from "react";
import { useRef,useState } from "react";


function AppRef3(){
    const [count, setCount]=useState(1);
    const renderCount=useRef(1);
    
    useEffect(()=>{
        renderCount.current=renderCount.current+1;
        console.log("ref",renderCount.current)
    });


    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={()=>{setCount(count+1)}}>+1</button>
        </div>
    );

};

export default AppRef3;
