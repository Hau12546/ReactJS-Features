import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
    isLoggedIn:false,
    onLogout:()=>{},
    onLogin:(email,password)=>{}
});


export const AuthContextProvider = ((props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        const d = new Date();
          d.setTime(d.getTime()+100);
          document.cookie=`isLoggedIn=${true}; ${d.toUTCString()}`;
        setIsLoggedIn(true);
      };

      useEffect(()=>{
          let test = decodeURIComponent(document.cookie).split(';')[0];
          console.log(test);
      },[isLoggedIn])
    
      const logoutHandler = () => {
        document.cookie = "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setIsLoggedIn(false);
      };


      return (<AuthContext.Provider value={{
          isLoggedIn:isLoggedIn,
          onLogin:loginHandler,
          onLogout:logoutHandler
    }}>{props.children}</AuthContext.Provider>);
});

export default AuthContext;