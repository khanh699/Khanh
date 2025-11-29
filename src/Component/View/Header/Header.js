import 'bootstrap/dist/css/bootstrap.min.css';
// import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { GrSearch } from "react-icons/gr";
import { BsBag } from "react-icons/bs";
import { FaGripLines } from "react-icons/fa6";
import { IoLogoApple, IoMdClose } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";

const Header = (props) => {
  const [isShowNav, setIsShowNav] = useState(false);
  
  const HandleNav = () => {
    setIsShowNav(!isShowNav);
  }

  return(
    <>
      <div className="header-container">
        <div className='header-background'>
          <div className="logo"><NavLink to="/" className="navbar-brand"><IoLogoApple /></NavLink></div>
          <div className="responsive">
            <label htmlFor='close' onClick={() => {HandleNav()}}><FaGripLines /></label>
            <input className='input' hidden type='checkbox' id='close'/>
            <label htmlFor='close' className='background' style={isShowNav ? {display : "block"} : {display : "none"}}></label>
            <div className="list" style={isShowNav ? {transform : "translateX(0)"} : {transform : "translateX(100%)"}}>
              <label htmlFor='close' className="close" aria-label="Close" onClick={() => {HandleNav()}}><IoMdClose /></label>
              <div className="box">
                <h3 onClick={() => {HandleNav()}}><NavLink to="/store" className="navbar-brand">Store</NavLink></h3>
                <div className=""></div>
              </div>
              <div className="box">
                <h3 onClick={() => {HandleNav()}}><NavLink to="/" className="navbar-brand">Mac</NavLink></h3>
                <div></div>
              </div>
              <div className="box">
                <h3 onClick={() => {HandleNav()}}><NavLink to="/" className="navbar-brand">iPad</NavLink></h3>
                <div></div>
              </div>
              <div className="box">
                <h3 onClick={() => {HandleNav()}}><NavLink to="/" className="navbar-brand">iPhone</NavLink></h3>
                <div></div>
              </div>
              <div className="box">
                <h3 onClick={() => {HandleNav()}}><NavLink to="/" className="navbar-brand">Watch</NavLink></h3>
              </div>
              <div className="box">
                <h3 onClick={() => {HandleNav()}}><NavLink to="/" className="navbar-brand">Vision</NavLink></h3>
              </div>
              <div className="box">
                <h3 onClick={() => {HandleNav()}}><NavLink to="/" className="navbar-brand">AirPods</NavLink></h3>
              </div>
              <div className="box">
                <h3 onClick={() => {HandleNav()}}><NavLink to="/" className="navbar-brand">TV &#38; Home</NavLink></h3>
              </div>
              <div className="box">
                <h3 onClick={() => {HandleNav()}}><NavLink to="/" className="navbar-brand">Entertainment</NavLink></h3>
              </div>
              <div className="box">
                <h3 onClick={() => {HandleNav()}}><NavLink to="/" className="navbar-brand">Accessories</NavLink></h3>
              </div>
              <div className="box">
                <h3 onClick={() => {HandleNav()}}><NavLink to="/" className="navbar-brand">Support</NavLink></h3>
              </div>
            </div>
          </div>
          <label htmlFor='close' className='background'></label>
          <div className="list">
            <div className="box">
              <h3><NavLink to="/store" className="navbar-brand">Store</NavLink></h3>
              <div className=""></div>
            </div>
            <div className="box">
              <h3><NavLink to="/" className="navbar-brand">Mac</NavLink></h3>
              <div></div>
            </div>
            <div className="box">
              <h3><NavLink to="/" className="navbar-brand">iPad</NavLink></h3>
              <div></div>
            </div>
            <div className="box">
              <h3><NavLink to="/" className="navbar-brand">iPhone</NavLink></h3>
              <div></div>
            </div>
            <div className="box">
              <h3><NavLink to="/" className="navbar-brand">Watch</NavLink></h3>
            </div>
            <div className="box">
              <h3><NavLink to="/" className="navbar-brand">Vision</NavLink></h3>
            </div>
            <div className="box">
              <h3><NavLink to="/" className="navbar-brand">AirPods</NavLink></h3>
            </div>
            <div className="box">
              <h3><NavLink to="/" className="navbar-brand">TV &#38; Home</NavLink></h3>
            </div>
            <div className="box">
              <h3><NavLink to="/" className="navbar-brand">Entertainment</NavLink></h3>
            </div>
            <div className="box">
              <h3><NavLink to="/" className="navbar-brand">Accessories</NavLink></h3>
            </div>
            <div className="box">
              <h3><NavLink to="/" className="navbar-brand">Support</NavLink></h3>
            </div>
          </div>
          <div className="user">
            <span><GrSearch /></span>
            <span><BsBag /></span>
            {/* <button type="button" className="btn btn-outline-dark">Log In</button>
            <button type="button" className="btn btn-dark">Sign Up</button> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;