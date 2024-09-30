import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./Courses/Courses";
import Profile from "./Profile/Profile";
import FindWork from "./FindWork/FindWork";
import Description from "./desPage/Description";
import Navbar from "./mainPage/Navbar";

// import Signup from "./Signup/Signup";
// import Login from "./Login/Login";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />}></Route>
      {/* <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route> */}
      <Route path="/work" element={<FindWork />}></Route>
      <Route path="/employers" element={<App />}></Route>
      <Route path="/internships" element={<App />}></Route>
      <Route path="/support" element={<App />}></Route>
      <Route path="/courses" element={<Courses />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/description" element={<Description />}></Route>
    </Routes>
    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
