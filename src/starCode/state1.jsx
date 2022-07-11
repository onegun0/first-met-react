import React,{useState} from "react";

function Clock(){
    const [time, setTime]=useState(1);

    function setUp(){
        if (time>=12){
            setTime(1);
        }else {
            setTime(time+1);
        }
        
    };


    return (
        <div>
            <p>
                현재 시각 : {time}시
            </p>
            <button onClick={setUp}>
                한 시간 후...
            </button>
        </div>
    )
}
export default Clock;