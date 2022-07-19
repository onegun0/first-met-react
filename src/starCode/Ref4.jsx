import React from "react";
import { useEffect } from "react";
import { useRef,useState } from "react";


function AppRef4(){
    const inputRef=useRef();

    useEffect(()=>{
        // console.log(inputRef)
        inputRef.current.focus();
    },[])

    function popUpClick(){
        alert(`환영합니다. ${inputRef.current.value}`);
    };

    return(
        <div>
            <input ref={inputRef} type="text" placeholder="username" />
            <button onClick={popUpClick}>로그인</button>
        </div>
    );

};

export default AppRef4;
 