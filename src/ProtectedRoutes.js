import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
    const {Component} = props
    const navigate = useNavigate();
    useEffect(() =>{
        let auth = localStorage.getItem('auth');
        if(!auth){
            navigate("/loginout");
        }
    });

    return (
        <div>
            <Component />
        </div>
    );
};

export default ProtectedRoute;