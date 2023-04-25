import { createContext } from 'react';


const userContext = createContext({
  user: {
    id: "helloworld",
    email: "helloworld@gmail.com",
  },
});

userContext.displayName = "userContext";

export default userContext;
