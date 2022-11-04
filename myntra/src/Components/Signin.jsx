import React, { useState } from 'react';
import "../css/Signin.css";
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import { Link,useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
    

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    //console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryou");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            alert('Email field is required', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            alert('Enter valid email address', {
                position: "top-center",
            });
        } else if (password === "") {
            alert('password field is required', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/")
                }
            }
        }

    }



  return (
    <div className="signinDiv">
        <div className="sign1">
            
            <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/1/14/06a82649-47fa-4480-8d17-932dc7bd4d0e1642184399334-Banner_Hamburger_400.png"/>
            
            <br/>
            <br/>
            <div className="sign1-1">
                <h2>Log in</h2>
                
            </div>
            <br/>
            <div>
                <input type="email" name='email' onChange={getdata} placeholder="Enter Email*"/>
                <br/>
                <br/>
                <input type="password" name='password' onChange={getdata} placeholder="Password"/>
            </div>
            <br/>
            <br/>
            <div>
            <p style={{color:"grey"}}>
            By continuing, I agree to the <b>Terms of Use</b> & <b>Privacy Policy</b>
            </p>
            </div>
            <div>
                <button className="signbtn" onClick={addData}>SIGN IN</button>
            </div>
            <br/>
            <div>
                <p style={{color:"grey"}}>Have trouble logging in? <b>Get help</b></p>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    </div>
  )
}

export default Signin;