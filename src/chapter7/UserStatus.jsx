import React,{useState,useEffect} from "react";



function UserState(props){
    const [isOnline, setIsOnline]=useState(null);

    function handleStatusChange(status){
        setIsOnline(status.isOnline)
    }

    useEffect(()=>{
        ServerAPI.subscribeUserStatus(props.user.id,handleStatusChange);
        return ()=>{
            ServerAPI.unsubscribeUserStatus(props.user.id,handleStatusChange);
        };
    });
if (isOnline===null){
    return `대기 중...`
}
return isOnline ? `온라인` : `오프라인`;

};
export default UserState;






// function UserStatus(props){
//     const isOnline = useUserStatus(props.user.id);
    
//     if (isOnline===null){
//         return `대기 중...`
//     }
//     return isOnline ? `온라인` : `오프라인`;
// }

// function UserListItem(props){
//     const isOnline = useUserStatus(props.user.id);

//     return (
//         <li style={{color : isOnline ? 'green':'black'}}>
// 			{props.user.name}
// 	    </li>
//     )
// }

