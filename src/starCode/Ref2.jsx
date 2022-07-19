import React from "react";
import { useRef,useState } from "react";


function AppRef2(){

    const countRef = useRef(0);
    const [lenderState,setLenderState]=useState(0);
    let countVar = 0;

    console.log("렌더링");



    const increaseRef=()=>{
        countRef.current=countRef.current+1;
        console.log("Ref",countRef.current) ;
    }
    const increaseVar=()=>{
        countVar=countVar+1;
        console.log("Var",countVar);
    }


    return(
        <div>
            <p>Ref:{countRef.current}</p>
            <p>Var:{countVar}</p>
            <button onClick={increaseRef} >Ref +1</button>
            <button onClick={increaseVar} >Var +1</button>
            <br />
            <button onClick={()=>{
                setLenderState(lenderState+1)
            }} >렌더링</button>
        </div>
    );

};

export default AppRef2;
