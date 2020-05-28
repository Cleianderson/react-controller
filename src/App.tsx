import React, { useEffect, useState } from "react";

import HomeRoutes from "./routes/Home";
import "./global.css";

import ContextApp from "./contexts/ContextApp";

function App() {

  const [pass, setPass] = useState<string>('')
  
  useEffect(()=>{
    const inputPassword = prompt('Senha')
    setPass(inputPassword as string)
  },[])
  
  return (
    <div className="App">
      <ContextApp.Provider value={{pass}} >
        <HomeRoutes />
      </ContextApp.Provider>
    </div>
  );
}

export default App;
