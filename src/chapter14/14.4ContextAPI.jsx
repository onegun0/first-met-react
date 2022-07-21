import React, {useState} from "react"; 

function App(props){
    const [value,setValue]=useState({something:"somethong"});
    return (
        <MyContext.Provider value={value}>
            <Toolbar />
        </MyContext.Provider>
    );
}