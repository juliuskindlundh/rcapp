const url="http://localhost:8080/api/users";
const userService = {
    create:(dto,setStatusText)=>{
        fetch(url,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(dto)
        }).then(res => {
            if(res.status === 201){
                setStatusText("User created");
            }
            else if(res.status === 406){
                setStatusText("That username is not avalible");
            }
        });
    },
    login:(username,password,setToken,setStatusText,setUsername,newFetch,setNewFetch)=>{
        fetch(url,{
            method:"get",
            headers:{
                "username":username,
                "password":password
            }
        }).then((res)=>{
            if(res.status === 200){
                res.body.getReader().read().then(result=>{            
                    const data = result.value;
                    const token = String.fromCharCode(...data)
                    setToken(token);
                    setStatusText("Logged in as "+username)
                    setUsername(username);
                    setNewFetch(!newFetch);
                }) 
            }
            else{
                setStatusText("Failed to login")
            }
        });
    },
    logout:(username,setToken,setStatusText,clearFields,setUsername,newFetch,setNewFetch)=>{
        fetch(url,{
            method:"put",
            headers:{
                "username":username
            }
        }).then(res=>{
            if(res.ok){
                setToken("");
                setStatusText("Logged out");
                clearFields();
                setUsername("");
                setNewFetch(!newFetch);
            }
        })
    }
}

export default userService;