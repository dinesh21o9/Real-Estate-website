import React from "react";
import Home from "../pages/Home";
import Post from "../pages/post";
import Dashboard from "../pages/dashboard";
import Error from "../pages/Error";
import Signup from "../pages/signup";
import Login from "../pages/login";
import Admin_Login from "../pages/Admin_login";
import ViewProp from "../pages/view_prop";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>

          <Route exact path="/" element={<Home />} />
            
          <Route path="post" element={<Post />} />
            
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="signup" element={<Signup />} />

          <Route path="login" element={<Login />} />

          <Route path="adminLogin" element={<Admin_Login />} />

          <Route path="/viewProp/:offer/:prop_id" Component={ViewProp} />

          <Route path="*" element={<Error />} />
            
        </Routes>
      </Router>
  );
}

export default App;
