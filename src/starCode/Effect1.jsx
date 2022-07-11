import React from "react";
import { useEffect } from "react";
import { useState } from "react";


function Effect1(){
    const [count, setCount]= useState(0);
    const [name, setName]=useState('');

    const clickUpdate=()=>{
        setCount(count+1);
    };
    const nameUpdate=(e)=>{
        setName(e.target.value);
    };

    // //렌더링 될 때마다 실행
    // useEffect(()=>{
    //   console.log("useEffect렌더링");
    // });

    // //카운트가 바뀔 때 실행
    // useEffect(()=>{
    //   console.log("카운트 변화 렌더링");
    // },[count] );
    // //이름이 바뀔 때 실행
    // useEffect(()=>{
    //   console.log("name이 변화 렌더링");
    // },[name] );
    useEffect(()=>{
      console.log("맨 처음 마운트 될 때만 실행");
    },[] );

    return (
        <div>
            <button onClick={clickUpdate}>
                1씩 올라가는 버튼
            </button>
            <p>count:{count}</p>
            <input type="text" value={name} onChange={nameUpdate}/>
            <p>{name}</p>
        </div>
    )
};
export default Effect1;