import React from "react";
import { useState } from "react";

const heavyWork=()=>{
    console.log("엄청 무거운 작업")
    return ["하나","둘"]
} ;


function TextMake(){
    const [names, setNames]=useState(()=>{
        return heavyWork()
    });
    // 반복작업을 피하기 위해 콜백을 사용(맨처음 렌더링을 할 때만 호출된다)
    const [text, setText]=useState("")
  
    function textChange(event){
        setText(event.target.value);
    };
    const upLoad1=() => {setNames((preState)=>{
        console.log('이전 스테이트',preState)
        return ([...preState,text]);
    })
    };

    function keyCode1(e){
        if (e.keyCode===13){
            // console.log("enter")
            
            return upLoad1(),setText('')
        }
        
    }


    return (
        <div>
            <input id="1" type="text" value={text} onChange={textChange} onKeyUp={keyCode1} ></input>
            <button onClick={upLoad1}  >
                버튼
            </button>
            {names.map((name,idx) =>{
                return (
                    <p key={idx}>{name}</p>
                )
            } )}
        </div>
    )
}
export default TextMake;