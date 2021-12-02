import React from "react";
import { useMyPostsContext, useNewFetchContext, useTokenContext, useUsernameContext } from "../Context/DataContext";
import postService from "../Service/PostService";

function Post(props){

    const {token} = useTokenContext();
    const {username} = useUsernameContext();
    const {myPosts} = useMyPostsContext();
    const {newFetch,setNewFetch} = useNewFetchContext();

    const handleDelete = () =>{     
        for(var i = 0; i < myPosts.length;i++){
            if(myPosts.at(i).postId === props.data.postId){
                postService.delete(token,username,props.data.postId,newFetch,setNewFetch);
                return;
            }
        }

    }

    return(
        <div className="Post">
            <div className="postHeader">
                <h3>{props.data.headline}</h3>
                <h6>by:{props.data.creator}</h6>
            </div>
            <p>{props.data.text}</p>
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}

export default Post;