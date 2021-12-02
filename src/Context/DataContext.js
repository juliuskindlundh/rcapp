import React, { useContext,useState } from "react";

const DataContext = React.createContext();
export function useDataContext(){
    return useContext(DataContext)
}

const TokenContext = React.createContext();
export function useTokenContext(){
    return useContext(TokenContext);
}

const UsernameContext = React.createContext();
export function useUsernameContext(){
    return useContext(UsernameContext);
}

const MyPostsContext = React.createContext();
export function useMyPostsContext(){
    return useContext(MyPostsContext);
}

const NewFetchContext = React.createContext();
export function useNewFetchContext(){
    return useContext(NewFetchContext);
}

export function ContextProvider({children}){
    const [data,setData] = useState([]);
    const [token,setToken] = useState("");
    const [username,setUsername] = useState("");
    const [myPosts,setMyPosts] = useState([]);
    const [newFetch,setNewFetch] = useState(true);

    return(
            <DataContext.Provider value={{data,setData}}>
                <TokenContext.Provider value={{token,setToken}}>
                    <UsernameContext.Provider value = {{username,setUsername}}>
                        <MyPostsContext.Provider value={{myPosts,setMyPosts}}>
                            <NewFetchContext.Provider value={{newFetch,setNewFetch}}>
                                {children}
                            </NewFetchContext.Provider>
                        </MyPostsContext.Provider>
                    </UsernameContext.Provider>
                </TokenContext.Provider>
            </DataContext.Provider>
    );
}