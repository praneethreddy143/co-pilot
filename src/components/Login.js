import React from "react";
import logo from "../assets/AB_InBev_logo_PNG10.png";
const Login = () => {
    return (
        <div className="centered-container">
            <div className="centered-box">
                <div className="logo-container">
                    <div className="logo-divider">
                        <img src={logo} alt="Logo" className="logo" />
                    </div>
                    <span className="insight-copiot">Insights Copiot</span>
                </div>
                <p className="login-para">Login</p>
                <p className="text-above">please use your <span style={{color:"yellow"}}>AbinBevID</span> to login</p>
                <button className="login-button">Login</button>
            </div>
        </div>
    )
}

export default Login;