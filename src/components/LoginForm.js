import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "/src/redux/ReduxSlices/UserSlice";
const LoginForm = () => {
  const [User, setUser] = useState("");
  const [email, setEmail] = useState("");
 
 
 const dispatch = useDispatch();
 const onlogin = ()=>{
  dispatch(login({
   user: User}
  ))
 }
  
  
  return (
    <div className="flex flex-col justify-center  w-full items-center border ">
    
      <input
        onChange={(e) =>
          setUser({
            user: e.target.value,
          })
        }
        type="text"
        placeholder="User Name"
      />

      <input
        onChange={(e) =>
          setEmail({
            email: e.target.value,
          })
        }
        type="email"
        placeholder="@gmial.com"
      />
      <button onClick={onlogin} className="bg-blue-500">
        LogIN
      </button>
    </div>
  );
      }

export default LoginForm;
