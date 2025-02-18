import React from "react";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminLogin from "./pages/Login/Admin_login";
import ViewProp from "./pages/View_Property/View_prop";
import Header from "./components/Header";
import PostAd from "./pages/Post/Post_ad";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CombinedAuth from "./pages/Login/CombinedAuth";
import Landing from "./pages/Landing/Landing";
import ProtectedRoute from "./ProtectedRoutes";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route exact path="/home" element={<Home />} />

          <Route path="*" element={<Home />} />

          <Route path="post" element={<ProtectedRoute Component={Post} />} />

          <Route path="post_ad" element={<PostAd />} />

          <Route path="dashboard" element={<Dashboard />} />

          <Route path="loginout" element={<CombinedAuth />} />

          <Route path="adminLogin" element={<AdminLogin />} />

          <Route path="/viewProp/:offer/:prop_id" Component={ViewProp} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
