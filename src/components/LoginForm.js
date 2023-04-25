import { useContext, useState } from "react";
import userContext from "../utils/userContext";
const LoginForm = () => {
  const [isUser, setIsUser] = useState({
    id: `gourav`,
    email: `gourav@gmail.com`,
  })
  
  
  return (
    <div className="flex flex-col justify-center  w-full items-center border ">
      <userContext.Provider value={{user :isUser, }}>
        <input
          onChange={(e) =>
            setIsUser({  
              ...isUser,
              id: e.target.value,
            })
          }
          type="text"
          placeholder="user name"
        />
        
        <input
          onChange={(e) =>
            setIsUser({
              ...isUser,
              email: e.target.value,
            })
          }
          type="email"
          placeholder="@gmial.com"
        />
      </userContext.Provider>
    </div>
  );
};

export default LoginForm;
