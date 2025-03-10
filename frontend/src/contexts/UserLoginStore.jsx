import { userLoginContext } from "./userLoginContext";
import { useState } from "react";

function UserLoginStore({ children }) {
  //login user state
  let [currentUser, setCurrentUser] = useState(null);
  let [userLoginStatus, setUserLoginStatus] = useState(false);
  let [err, setErr] = useState("");

  //user login
  async function loginUser(userCred) {
    try {
      let res = await fetch(
         'http://localhost:4000/user-api/login'  ,
         {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(userCred)
         } 
       );
      let result = await res.json();
      
      if (result.message==='Login success') {
        setCurrentUser(result.user);
        setUserLoginStatus(true);
        setErr('')
        sessionStorage.setItem('token',result.token)
      
      }
      else
      {
       setErr(result.message);
       setCurrentUser({})
       setUserLoginStatus(false)

      }
    } catch (error) {
      setErr(error.message);
    }
  }

  //user logout
  function logoutUser() {
    //reset state
    setCurrentUser({});
    setUserLoginStatus(false);
    setErr('')
    //remove token form session storage
    sessionStorage.removeItem('token');
  }

  return (
    <userLoginContext.Provider
      value={{ loginUser, logoutUser, userLoginStatus,err,currentUser,setCurrentUser }}
    >
      {children}
    </userLoginContext.Provider>
  );
}

export default UserLoginStore;
