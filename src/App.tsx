import React, { useEffect, useState } from "react";
import smalltalk from "smalltalk";

import HomeRoutes from "./routes/Home";
import "./global.css";

import ContextApp from "./contexts/ContextApp";

function App() {
  const [pass, setPass] = useState<string>("");

  useEffect(() => {
    const showInputPassword = async () => {
      const inputUser = await smalltalk.prompt(
        "Senha",
        "Insira a senha para usar a aplicação",
        ""
      );
      setPass(inputUser);
    };
    showInputPassword();
  }, []);

  return (
    <div className="App">
      <ContextApp.Provider value={{ pass }}>
        <HomeRoutes />
      </ContextApp.Provider>
    </div>
  );
}

export default App;
