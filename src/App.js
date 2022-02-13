import { useState } from "react";
import "./styles/main.scss";
import { hasAuthenticated } from "./Utils/Api/AuthApi";
import Auth from "./context/Auth";
import CustomRouter from "./components/CustomRouter";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());

  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <CustomRouter />
    </Auth.Provider>
  );
}

export default App;
