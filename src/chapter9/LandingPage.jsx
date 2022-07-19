import React from "react";
import { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props){
    const [isLoggedIn, setIsLoggedIn]=useState(false);

    const onClickLogin=()=>{
        setIsLoggedIn(true);
    };
    const onClickLogout=()=>{
        setIsLoggedIn(false);
    };
    return (
        <div>
            <Toolbar 
            isLoggedIn={isLoggedIn}
            onClickLogin={onClickLogin}
            onClickLogout={onClickLogout} />
            <p style={{padding:16}}>툴바!!!</p>
        </div>
    )
};
export default LandingPage;