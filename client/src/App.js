import React, { lazy, Suspense } from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom";
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Chat from './pages/Chat';
// import SetAvatar from './pages/SetAvatar';
const Chat  = lazy(()=>import('./pages/Chat'));
const Login = lazy(()=>import('./pages/Login'));
const Register = lazy(()=>import('./pages/Register'));
const SetAvatar = lazy(()=>import('./pages/SetAvatar'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/setAvatar" element={<SetAvatar/>}/>
        <Route path="/" element={<Chat/>}/>
        </Routes>
      </Suspense>
   </BrowserRouter>
  )
}
