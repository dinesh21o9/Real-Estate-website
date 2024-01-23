import React from "react";
import Home from "../pages/Home";
import Post from "../pages/post";
import Dashboard from "../pages/dashboard";
import Signup from "../pages/signup";
import Login from "../pages/login";
import AdminLogin from "../pages/Admin_login";
import ViewProp from "../pages/view_prop";
import Header from "./Header";
import PostAd from "../pages/post_ad";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CombinedAuth from "../pages/combinedAuth";
import Landing from "../pages/landing";
import ProtectedRoute from "../ProtectedRoutes";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route exact path="/home" element={<Home />} />

          <Route path="post" element={<ProtectedRoute Component={Post} />} />

          <Route path="post_ad" element={<PostAd />} />

          <Route path="dashboard" element={<Dashboard />} />

          <Route path="signup" element={<Signup />} />
          <Route path="loginout" element={<CombinedAuth />} />
          <Route path="login" element={<Login />} />

          <Route path="adminLogin" element={<AdminLogin />} />

          <Route path="/viewProp/:offer/:prop_id" Component={ViewProp} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
