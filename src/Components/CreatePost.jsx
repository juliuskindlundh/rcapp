import React, { useState } from "react";  
import { useDataContext,useTokenContext, useUsernameContext,useNewFetchContext } from "../Context/DataContext";
import postService from "../Service/PostService";

function CreatePost(){

    const [headline,setHeadline] = useState("");
    const [text,setText] = useState("");
    const {token} = useTokenContext();
    const {username} = useUsernameContext();
    const {setData}= useDataContext();
    const {newFetch,setNewFetch} = useNewFetchContext();

    const handlePost = () =>{
        postService.create(JSON.stringify({
            "postId":0,
            "headline":headline,
            "text":text,
            "upvoites":0,
            "downvotes":0
        }),token,username,setData,newFetch,setNewFetch);
    }

    const handleHeadlineChange = (e)=>{
        setHeadline(e.target.value);
    }

    const handleTextChange = (e)=>{
        setText(e.target.value);
    }
    

    return(
        <div className="createPost">
            <input type="text" onChange={handleHeadlineChange} value={headline}></input><br></br>
            <textarea type="text" onChange={handleTextChange} value={text}></textarea><br></br>
            <button onClick={handlePost}>Post</button>
        </div>
    )
}

export default CreatePost;