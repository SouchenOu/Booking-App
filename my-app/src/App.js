import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/Hotel/Hotel";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Contact from "./pages/Contact/Contact";
import Message from "./pages/Message/Message";
import { useAuth } from "./context/AuthenticationContext";
function App() {

  const {isAuthenticated} = useAuth();
  console.log("isAuthenticated", isAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ isAuthenticated ? <Home/> : <Login/>}></Route>
        <Route path="/hotels" element={isAuthenticated ? <List/> : <Login/>}></Route>
        <Route path="/hotels/:id" element={isAuthenticated  ? <Hotel/> : <Login/>}></Route>
        <Route path="/login" element={ <Login/>}></Route>
        <Route path="/register" element={ !isAuthenticated ? <Register/> : <Home/>}></Route>
        <Route path="/contact" element={isAuthenticated ? <Contact/> : <Login/>}></Route>

      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
