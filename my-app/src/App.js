import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/Hotel/Hotel";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/hotels" element={<List/>}></Route>
        <Route path="/hotels/:id" element={<Hotel/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>

      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
