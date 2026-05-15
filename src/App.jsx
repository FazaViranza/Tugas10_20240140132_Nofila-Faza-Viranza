import { useState } from "react";
import Login from "./components/Login";
import Catalog from "./components/Catalog";
import "./styles/style.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin ? (
        <Catalog setIsLogin={setIsLogin} />
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}
    </>
  );
}

export default App;