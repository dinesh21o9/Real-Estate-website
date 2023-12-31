import React from "react";
import Home from "../pages/Home";
import Post from "../pages/post";
import Dashboard from "../pages/dashboard";
import Error from "../pages/Error";
import Signup from "../pages/signup";
import Login from "../pages/login";
import Admin_Login from "../pages/Admin_login";
import ViewProp from "../pages/view_prop";
import PostAd from "../pages/post_ad";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CombinedAuth from "../pages/combinedAuth";
import Landing from "../pages/landing";


function App() {
  return (
      <Router>
        <Routes>

          <Route exact path="/" element={<Landing />} />
          
          <Route exact path="/home" element={<Home />} />

          <Route path="post" element={<Post />} />  
          
          <Route path="post_ad" element={<PostAd />} />
            
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="signup" element={<Signup />} />
          <Route path="loginout" element={<CombinedAuth />} />
          <Route path="login" element={<Login />} />

          <Route path="adminLogin" element={<Admin_Login />} />

          <Route path="/viewProp/:offer/:prop_id" Component={ViewProp} />

          <Route path="*" element={<Error />} />
            
        </Routes>
      </Router>
  );
}

export default App;
