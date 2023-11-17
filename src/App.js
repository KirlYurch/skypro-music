import { AppRoutes } from "./Components/routes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {

  const [user, setUser] = useState(null);
  const handleLogin = () => {
    setUser({ login: "taradam" });
    localStorage.setItem("user", "taradam");
  } 
  console.log(user);


  const handleLogout = () => setUser("wqerty");

  return (
    <>
    <AppRoutes/>
    </>
  );

}

export default App;
