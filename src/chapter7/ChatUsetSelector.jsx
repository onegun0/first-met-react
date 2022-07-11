import { useState } from "react";


const userList=[
    {id:1,name:'name1'},{id:2,name:'name2'},{id:3,name:'name3'}
];
function ChatUserSelector(props){
    const [userId,setUserId]=useState(1);
    const isUserOnline= useUserStatus(userId);
    
    return (
        <>
            <Circle color={isUserOnline ? 'green':'red'} />
            <select value={userId} onChange={event => setUserId(Number(event.target.value))}>
                {userList.map(user=>{
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                })}

            </select>
        
        
        </>
    );
}