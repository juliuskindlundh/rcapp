import { useState } from "react";

function useUsername() {
  const getUsername = () => {
    const t = sessionStorage.getItem("username");
    if(t === null){
        return "";
    }
    return t;
  };

  const [username, setUsername] = useState(getUsername());

  const saveUsername = (userusername) => {
    sessionStorage.setItem("username", userusername);
    setUsername(userusername);
  };

  return {
    setUsername: saveUsername,
    username,
  };
};

export default useUsername;