import React from "react";



function UserGreenting(props){

    return <h1>다시 오셨군요!</h1>
};

function GuestGreeting(props){

    return <h1>회원가입을 해주세요.</h1>
};


function Greeting(props){
    const isLoggedIn=props.isLoggedIn;
    console.log(props.isLoggedIn)
    if (isLoggedIn){
        return <UserGreenting />
    };
    return <GuestGreeting />;
}

export default Greeting;