import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';
import logo from './ProjectImages/digitalLyncLogo.png';
import HomeImg from './ProjectImages/HomeImg.jpg'

function HomeComponent(){
    const navigate = useNavigate();
    return(
    <div className="container-fluid d-flex">
        <div className="col-sm-6 text-center">
            <div className="imglogo mt-5">
               <img src={logo} alt="digital lync logo" className="logo"/>
            </div>
            <div className="welcome">
                <h1 className="hedding mb-3" style={{fontWeight:'inherit'}}>Welcome</h1>
                <p className="para">Please sign into your account below</p>
            </div>
            <div className="mt-5">
                <button className="btn btn-primary" onClick={()=>navigate("/login")}><span>SignIn</span></button>
            </div>
        </div>
        <div className="col-sm-6">
            <img src={HomeImg} alt="img" className="hImg"/>
        </div>
    </div>
    );
}
export default HomeComponent