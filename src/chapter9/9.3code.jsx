import React from "react";
import { useState } from "react";


function Counter(props){
    const count=0;

    return (
        <div>
            {count && <h1>현재 카운트:{count}</h1>} 
        </div>
    );
}


function UserStatus(props){
    return (
        <div>
            이 사용자는 현재 <b>{props.isLoggedIn ? "로그인":"로그아웃"}</b>
            상태입니다. 
        </div>
    )
}


function LoginControl(props){
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    
    const handleLoginClick = ()=>{
        setIsLoggedIn(true)
    };
    const handleLogoutClick =()=>{
        setIsLoggedIn(false);
    };
    return (
        <div>
            <Greeting isLogedIn={isLoggedIn} />
            {isLoggedIn ? <LogoutButton onClick={handleLogoutClick} />
            :<LoginButton onClick={handleLoginClick} /> }
        </div>
    )
    }

function WarningBanner(props){
    if(!props.warning){
        return null;
    }
    return (
        <div>
            경고!
        </div>
    )
}

function MainPage(props){
    const [showWarning,setShowWarning]=useState(false);

    const handleToggleClick =()=>{
        setShowWarning((showWarning)=>!showWarning)
    }
    return (
        <div>
            <WarningBanner warning={showWarning} />
            <button onClick={handleToggleClick}>
                {showWarning ? "감추기":"보이기"}
            </button>
        </div>
    )
}