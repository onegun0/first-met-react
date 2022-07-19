import React from "react";

const student=[
    {   id:1,
        name:"red"},
    {   id:2,
        name:"blue"},
    {   id:3,
        name:"yellow"},
    {   id:4,
        name:"green"},
    {   id:5,
        name:"black"}
];

function AttendanceBook(props){
    return (
        <ul>
            {student.map((student)=>{
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    )
};
export default AttendanceBook;