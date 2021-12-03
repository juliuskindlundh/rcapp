import React, { useEffect } from "react";
import postService from "../Service/PostService";
import Post from "./Post";
import { useDataContext, useMyPostsContext, useNewFetchContext, useTokenContext, useUsernameContext } from "../Context/DataContext";

function ContentView(){

    const {data,setData} = useDataContext();
    const {setMyPosts} = useMyPostsContext();
    const {newFetch} = useNewFetchContext();
    const {token} = useTokenContext();
    const  {username} = useUsernameContext();

    useEffect(()=>{
        postService.getAll(setData);
        postService.getUserPosts(token,username,setMyPosts);
    },[newFetch])

    const dataIsLoaded = () =>{
        if(data !== undefined){
            return true;
        }
        else{
            return false;
        }
    }
    return(
        <div className="contentview">
        {
            dataIsLoaded()?
            <div>
            {
                data.map((row,index)=>{
                    return(
                       <Post key={index} data={row}></Post>
                    )
               })
            }
            </div>
            :
            <div>

            </div>
        }
        </div>
    )
}

export default ContentView;