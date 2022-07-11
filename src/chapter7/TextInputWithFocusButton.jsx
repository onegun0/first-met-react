import React from "react";
import { useRef } from "react";

function TextInputWithFocusButton(props){
    const inputElem=useRef(null);
    const onButtonClick = ()=>{
        // current는 마운트된 input element를 가리킴
        inputElem.current.focus();
    };
    return (
        <div>
            <input ref={inputElem} type="text">
            </input>
            <button onClick={onButtonClick}>
                Focus the input
            </button>
        
        </div>
    )
}   
export default TextInputWithFocusButton;