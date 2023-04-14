import { useEffect, useState } from "react";
import { GIT_API } from "../config";

const useProfile = ()=>{
    
const [userdata, setUserData] = useState(null);
 
useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const data = await fetch(GIT_API);
    const json = await data.json();

    setUserData(json);
  } 
    return userdata;
}

export default useProfile;