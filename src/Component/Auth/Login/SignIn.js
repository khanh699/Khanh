import "bootstrap/dist/css/bootstrap.min.css";
import "./Account.scss";
import Icon from "../../../Assets/icon_dataprivacy.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="account">
        <div className="title">
          <div className="title-nav">
            <h3>Apple Account</h3>
            <div className="menu">
              <p onClick={() => navigate("/signin")}>Sign In</p>
              <p onClick={() => navigate("/account")}>Create Your Apple Account</p>
              <p>FAQ</p>
            </div>
          </div>
        </div>
        <div className="content">
          <h2>Apple Account</h2>
          <p>Manage your Apple Account</p>
          <div className="row gap-3 my-4">
            <div className="col col-12 col-sm-12 col-md-12 col-xl-12">
              <div className="form-floating">
                <input type="text" className="form-control" id="floatingemail" placeholder="name@example.com" value={email} onChange={(event) => setEmail(event.target.value)}/>
                <label htmlFor="floatingemail">Email or Phone Number</label>
              </div>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-xl-12">
              <div className="form-floating">
                <input type="text" className="form-control" id="floatingpassword" placeholder="name@example.com" value={password} onChange={(event) => setPassword(event.target.value)}/>
                <label htmlFor="floatingpassword">Password</label>
              </div>
            </div>
          </div>

          <hr/>
        
          <div className="mt-4 pb-5">
            <figure><img src={Icon} alt="Dataprivacy" /></figure>
            <p className="font">Your Apple Account information is used to allow you to sign in securely and access your data. Apple records certain data for security, support and reporting purposes. If you agree, Apple may also use your Apple Account information to send you marketing emails and communications, including based on your use of Apple services. <NavLink to="/" className="color">See how your data is managed</NavLink>.</p>
            <div className="d-flex justify-content-center"><button type="submit" className="btn btn-primary" name="websubmit">Continue</button></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn;
