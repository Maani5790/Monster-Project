import { Route, Routes } from "react-router-dom";
import React from "react";
import Page from "../Login-Signup/Login/Page";
import Homepage from "../Homepage/Homepage";
import SignUp from "../Login-Signup/Signup/SignupPage";
import Dashboard from "../Homepage/Contents/Dashboard";
import Message from "../Message";
import User from "../Homepage/Contents/User";
import Analytic from "../Analytic";
import FileManager from "../Homepage/Contents/FileManager";
import Cart from "../Homepage/Contents/Cart";
import Save from "../Homepage/Save";
import Setting from "../Homepage/Contents/Setting";


function login() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="Homepage" element={<Homepage />} />
        <Route path="Signup" element={<SignUp />} />
        <Route path="Login" element={<Page />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Message" element={<Message />} />
        <Route path="/User" element={<User />} />
        <Route path="/Analytic" element={<Analytic />} />
        <Route path="/FileManager" element={<FileManager />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Save" element={<Save />} />
        <Route path="/Setting" element={<Setting />} />
        

      </Routes>
    </div>
  );
}

export default login;
