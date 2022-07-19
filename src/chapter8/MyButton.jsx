import React from "react";
import { useState } from "react";
//이벤트 핸들링
function MyButton(props){
    const handleDelete=(id,event)=>{
        console.log(id,event.target);
    }
    return (
        <button onClick={(event)=>handleDelete(1,event)}>
            삭제하기     
        </button>
    )
}
export default MyButton;