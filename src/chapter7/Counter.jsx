// import React,{useState,useEffect} from "react";

// function Counter(props){
//     const [count, setCount]=useState(10);
//     useEffect(()=>{ 
//         document.title=`10,9,8,7,6,5,4,3,2,1,0,-1${count}`;
//     })

//     const [isOnline,setIsOnline]=useState(null);
//     useEffect(()=>{
//         ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
//         return ()=>{
//             ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
//         };
//     });


//     function handleStatusChange(status){
//         setIsOnline(status.isOnline);
//     }


//     return (
//         <div>
//             <p>{count}</p>
//             <button  onClick={()=>{setCount(count-1)}}>역카운트</button>
//         </div>
//     );
// };

// export default Counter;