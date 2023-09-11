import React from "react";
import './Login.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {Link, useNavigate } from "react-router-dom";
import logo from './ProjectImages/digitalLyncLogo.png';

function Login(){
    const navigate=useNavigate();
    const {register,handleSubmit} = useForm();

    const onsubmit=(data)=>{
       try {
         const res = axios.post("url",data)
            console.log(res);
            navigate("/")
            
        } catch (error) {
            
        }

    };
    
    const handleInputChange = (event) => {
        const input = event.target;
        const label = input.nextElementSibling;

        if (input.value) {
        label.classList.add("active");
        } else {
        label.classList.remove("active");
        }
    };

    return(
    <div className="container-fluid signIn">
        <div className="row">
        <div className="col-sm login text-center">
            <header>
                <div className="head">
                    <img src={logo} alt="digital lync logo"/>
                    <h2 style={{fontWeight:'inherit'}}>Welcome</h2>
                    <p>Login to Kona LMS to continue to DigitalLync.</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="input-field">
                              
                                <input className="input1" type="email" id="email"
                                {...register("email",{required:true})}
                                />
                            <label htmlFor="email" className="label1">email</label>
                       </div>
                       <div className="input-field mt-3">
                         
                            <input className="input1" type="password" onChange={handleInputChange} id="password"
                            {...register("password",{required:true})}
                            />
                            <label htmlFor="password" className="label1">password</label> 
                       </div>
                       <p><Link className="nav-link-active mt-5" to="/forgot">Forgot password?</Link></p>
                       <div className="mt-3">
                            <button className="btn btn-primary">continue</button>
                       </div>
                    </form>
                </div>
            </header>
        </div>
        </div>
    </div>

    )
}
export default Login