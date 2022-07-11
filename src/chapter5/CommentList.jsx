import React from "react";
import Comment from "./Comment";


const comments=[{
    name:"일번이", comment:"일번이에요"
},
{name: "이번이", comment:"이번이에요" },
{name:"삼번이", comment: "삼번이에요"}
]



function CommentList(props){
    return (
        <div>
            {comments.map((comment)=>{
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            }
            
            )}
        </div>
    );
}
        
     

export default CommentList;