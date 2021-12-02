import { useState } from "react";

function usePosts(){
    const [posts,setPosts] = useState([]);

    return{
        posts:posts,
        setPosts:setPosts,
    }
}

export default usePosts;