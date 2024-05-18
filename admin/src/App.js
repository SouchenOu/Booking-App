import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { useContext } from 'react';
import { DarkModeContext } from './components/context/darkModeContext';
import Users from './components/users/Users';
import { AuthContext } from './components/context/AuthContext';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  console.log("darkmode-->", darkMode);
  const ProtectedRoute = () =>{
    const {user} = useContext(AuthContext);
    if(!user){
      <Navigate tp="/login"/>

    }

  }
  return (
    <div className={ !darkMode ? "app dark" : "bg-black"}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/users" >
              <Route index element={
                  <ProtectedRoute>
                    <Users  />
                  </ProtectedRoute>
                }>

              </Route>

            </Route>

        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
//   return (
//     <div className={darkMode ? "app dark" : "app"}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/">
//             <Route path="login" element={<Login />} />
//             <Route index element={<ProtectedRoute> <Home /> </ProtectedRoute>}/>
//             <Route path="users"> <Route
//                 index
//                 element={
//                   <ProtectedRoute>
//                     <List columns={userColumns} />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path=":userId"
//                 element={
//                   <ProtectedRoute>
//                     <Single />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="new"
//                 element={
//                   <ProtectedRoute>
//                     <New inputs={userInputs} title="Add New User" />
//                   </ProtectedRoute>
//                 }
//               />
//             </Route>
//             <Route path="hotels">
//               <Route
//                 index
//                 element={
//                   <ProtectedRoute>
//                     <List columns={hotelColumns} />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path=":productId"
//                 element={
//                   <ProtectedRoute>
//                     <Single />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="new"
//                 element={
//                   <ProtectedRoute>
//                     <NewHotel  />
//                   </ProtectedRoute>
//                 }
//               />
//             </Route>
//             <Route path="rooms">
//               <Route
//                 index
//                 element={
//                   <ProtectedRoute>
//                     <List columns={roomColumns} />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path=":productId"
//                 element={
//                   <ProtectedRoute>
//                     <Single />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="new"
//                 element={
//                   <ProtectedRoute>
//                     <NewRoom  />
//                   </ProtectedRoute>
//                 }
//               />
//             </Route>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
}

export default App;
