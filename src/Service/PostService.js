const url="http://localhost:8080/api/posts";
const postService = {
    create:(dto,token,username,setData,newFetch,setNewFetch)=>{
        fetch(url,{
            method:"post",
            headers:{
                "token":token,
                "username":username,
                "Content-Type":"application/json"
            },
            body:dto
        }).then(a=>{
            postService.getAll(setData);
            setNewFetch(!newFetch)
            
        });
    },
    getAll:(setData)=>{
        fetch(url,{
            method:"get"
        }).then(res=>res.json()).then(data=>{
            setData(data);
            console.log(data);
        })
    },
    getUserPosts:(token,username,setMyPosts)=>{
        fetch(url+"/getuserposts",{
            method:"get",
            headers:{
                "token":token,
                "username":username
            },           
        }).then(res=>{
            if(res.status===200){
                res.json().then(data=>{
                    setMyPosts(data);
                    console.log(data);
                })
            }
        })
    },
    delete:(token,username,postId,newFetch,setNewFetch)=>{
        fetch(url,{
            method:"delete",
            headers:{
                "token":token,
                "username":username,
                "postid":postId
            },           
        }).then(res=>{
            setNewFetch(!newFetch);
            console.log(res);
        })
    }

}

export default postService;