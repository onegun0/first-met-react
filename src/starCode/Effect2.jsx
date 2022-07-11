import React, { useEffect } from "react";

function Timer(props){
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("타이머 돌아가는 중")
        },1000);
        return (()=>{
            clearInterval(timer);
            console.log("타이머 종료");
        }
        );
    },[]);




    return(
        <div>
            타이머 -> 콘솔창
        </div>
    )

}

export default Timer