// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ImSpinner } from "react-icons/im";
// import Language from "../../Header/Language";
// import { useTranslation } from "react-i18next";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { type } from '@testing-library/user-event/dist/type';
import { ImArrowRight } from "react-icons/im";
import { GoArrowUpRight } from "react-icons/go";
import { loginAction } from "../../../Redux/action/loginAction";
import image from '../../../Assets/users.png';

const LogIn = (props) => {
  // const { t } = useTranslation();
  const stateData = {
    khanh: { id: '1', email: 'khanh69@gmail.com', password: '1999', username: 'khanh', image: image }
  }
  
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(false);

  const [isShowFormPassword, setIsShowFormPassword] = useState(false);

  const accountName = () => {
    const button = document.querySelector(".button");
    const input = document.querySelector(".form-control");

    setIsShowFormPassword(!isShowFormPassword);
    button.style.display = "none";
    input.style.borderRadius = "12px 12px 0 0";
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  const handleLogin = () => {
    const isvalidEmail = validateEmail(emailOrPhone);

    if (!isvalidEmail) {
      toast.error("Invalid Email");
      return;
    }
    if (!password) {
      toast.error("Invalid Password");
      return;
    }
    // setIsLoading(true);

    if (emailOrPhone === stateData.khanh.email && password === stateData.khanh.password) {

      dispatch(loginAction(stateData));
      toast.success("Login successful");
      // setIsLoading(false);
      navigate("/");
    }

    if (emailOrPhone !== stateData.khanh.email) {
      toast.error("Incorrect Email");
      // setIsLoading(false);
      return;
    }

    if (password !== stateData.khanh.password) {
      toast.error("Incorrect Password");
      // setIsLoading(false);
    }

   
    // let res = await postLogin(email, password);
    // // console.log(res)
    // if (res && res.EC === 0) {
    //   dispatch(doLogin(res));
    //   toast.success(res.EM);
    //   setIsLoading(false);
    //   navigate("/");
    // }

    // if (res && res.EC !== 0) {
    //   toast.error(res.EM);
    //   setIsLoading(false);
    // }
  };

  const handleKeyDown = (event) => {
    if (event && event.key === "Enter") {
      handleLogin();
    }
  };

  

  return (
    <>
      <div className="login">
        <h1>Sign in for faster checkout.</h1>
        <div className="with-signin">
          <h2>Sign in to Apple Store</h2>
          <div className="form">
            <div className="signin-form">
              <div className="account-name">
                <div className="form-floating">
                  <input type="text" className="form-control" id="floatingemail" placeholder="Email or Phone Number" value={emailOrPhone} onChange={(event) => setEmailOrPhone(event.target.value)}/>
                  <label htmlFor="floatingemail">Email or Phone Number</label>
                </div>
                <button className="button" disabled={emailOrPhone === "" ? true : false} style={{opacity: 0.6}} onClick={()=> accountName()}><ImArrowRight /></button>

                {/* <div className="account-name">
                  <div>
                    <div className="form-textbox">
                      <input type="text" className="form-textbox-input" value={emailOrPhone} onChange={(event) => setEmailOrPhone(event.target.value)}/>
                      <span className="form-textbox-label form-label-flyout">Email or Phone Number</span>
                    </div>
                  </div>
                  <button className="button" disabled={emailOrPhone === "" ? true : false} style={emailOrPhone !== "" ? { cursor: 'pointer', opacity: 0.5 } : { cursor: 'not-allowed', opacity: 0.5 }}><ImArrowRight /></button>
                </div>
              
                <div className="password" style={isShowFormPassword ? {display : "block"} : {display : "none"}}>
                  <div>
                    <div className="form-textbox">
                      <input type="password" id="password_text_field " aria-required="true"  autocomplete="off" className="form-textbox-input form-control" />
                      <span className="form-textbox-label form-label-flyout">Password</span>
                    </div>
                  </div>
                  <button className="button"><ImArrowRight /></button>
                </div> */}
              </div>
              <div className="password" style={isShowFormPassword ? {display : "block"} : {display : "none"}}>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingpassword" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} onKeyDown={(event) => handleKeyDown(event)}/>
                  <label htmlFor="floatingpassword">Password</label>
                </div>
                <button className="button" disabled={password === "" ? true : false} style={{opacity: 0.6}} onClick={() => handleLogin()}><ImArrowRight /></button>
              </div>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="checkDefault"/>
              <label className="form-check-label" htmlFor="checkDefault">Remember me</label>
            </div>
          </div>
          <div className="forgot">
            <p><NavLink to="/">Forgot password?<GoArrowUpRight /></NavLink></p>
            <p className="m-0">Don’t have an Apple Account? <NavLink to="/account">Create Your Apple Account<GoArrowUpRight /></NavLink></p>
          </div>
        </div>
      </div>
      <div className="rs-chat">
        <div className="chat-container">
          <p className="m-0">Need some help? <NavLink to="/"><ins>Chat now</ins></NavLink> or call <NavLink to="/" target="_blank"><ins>1-800-MY-APPLE</ins></NavLink>.</p>
        </div>
      </div>
    </>
  );
};

export default LogIn;
