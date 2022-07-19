import React from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useRef,useState } from "react";


function AppCallback(){
    const [number, setNumber]= useState(0);
    const [toggle, setToggle]=useState(true);

    const someFunction= useCallback(
    
    ()=>{
        console.log(`someFunction:number:${number}`);
        return ;
    },[number]);

    useEffect(()=>{
        console.log("someFunction Change")
    },[someFunction]);


    return(
        <div>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
            <button onClick={()=>{setToggle(!toggle)}}> {toggle.toString()}</button>
            <br />
            <button onClick={someFunction}>Call someFunction</button>
        </div>
    );
};

export default AppCallback;
 