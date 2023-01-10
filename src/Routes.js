import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.js";
import Login  from "./pages/Login.js";
import { Register } from "./pages/Register.js";
import  {ForgetPassword } from "./pages/ForgetPassword.js"
import { PasswordUpdated } from "./pages/PasswordUpdated.js";
import {ChangePassword  } from "./pages/ChangePassword.js";

import ProtectedRoute from "./pages/ProtectedRoute.js";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/apt"  element={<ProtectedRoute><App/></ProtectedRoute>}></Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/PasswordUpdated" element={<PasswordUpdated />} />
        <Route path="/reset-password/:id/:token" element={<ChangePassword />} />
        {/* <Route path="/apt" element={<App/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
