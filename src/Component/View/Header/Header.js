// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { NavLink, useNavigate } from "react-router-dom";

// const Header = () => {
//   // const navigate = useNavigate();
  
//   // const HandleLogin = () => {
//   //   navigate('/login');
//   // }
//   // const HandleRegister = () => {
//   //   navigate('/register');
//   // }

//   return (
//       <Navbar expand="lg" className="bg-body-tertiary">
//           <Container fluid>
//          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//          <Navbar.Toggle aria-controls="navbarScroll" />
//          <Navbar.Collapse id="navbarScroll">
//            <Nav
//              className="mx-auto my-2 my-lg-0"
//              navbarScroll
//            >
//              <Nav.Link href="#action1">Home</Nav.Link>
//              <Nav.Link href="#action2">Link</Nav.Link>
//              <NavDropdown title="Link" id="navbarScrollingDropdown">
//                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                <NavDropdown.Item href="#action4">
//                  Another action
//                </NavDropdown.Item>
//                <NavDropdown.Divider />
//                <NavDropdown.Item href="#action5">
//                  Something else here
//                </NavDropdown.Item>
//              </NavDropdown>
//              <Nav.Link href="#" disabled>
//                Link
//              </Nav.Link>
//            </Nav>
//            <Form className="d-flex">
//              <Form.Control
//                type="search"
//                placeholder="Search"
//                className="me-2"
//                aria-label="Search"
//              />
//              <Button variant="outline-success">Search</Button>
//            </Form>
//          </Navbar.Collapse>
//        </Container>
//      </Navbar>
//   );
// }

// export default Header;

import 'bootstrap/dist/css/bootstrap.min.css';
// import { NavLink } from "react-router-dom";
// import { useState } from 'react';
import { GrSearch } from "react-icons/gr";
import { BsBag } from "react-icons/bs";
import { FaGripLines } from "react-icons/fa6";
import { IoLogoApple, IoMdClose } from "react-icons/io";

const Header = (props) => {
  // const [isShowNav, setIsShowNav] = useState(true);

  // const Responsive = () => {
  //   // const respon = document.querySelector("div.respon");
  //   // console.log(respon);
    
  //   // respon.style.display = "flex";
  //   // alert("my");
  //   setIsShowNav(!isShowNav);
  // }
  return(
    <>
      <div className="header-container">
        <div className="logo"><a href="/"><IoLogoApple /></a></div>
        {/* <label className="responsive" htmlFor='close'>&#9776;</label>
        <input className='input' hidden type='checkbox' id='close'/> */}
        <div className="responsive">
          <label htmlFor='close'><FaGripLines /></label>
          <input className='input' hidden type='checkbox' id='close'/>
          {/* <button onClick={() => Responsive()}>&#9776;</button>
          <button type="button" className="btn-close" aria-label="Close"></button> */}
          <label htmlFor='close' className='background'></label>
            <div className="list">
              <label htmlFor='close' className="close" aria-label="Close"><IoMdClose /></label>
              <div className="box">
                <h3>Store</h3>
                <div className=""></div>
              </div>
              <div className="box">
                <h3>Mac</h3>
                <div></div>
              </div>
              <div className="box">
                <h3>iPad</h3>
                <div></div>
              </div>
              <div className="box">
                <h3>iPhone</h3>
                <div></div>
              </div>
              <div className="box">
                <h3>Watch</h3>
              </div>
              <div className="box">
                <h3>Vision</h3>
              </div>
              <div className="box">
                <h3>AirPods</h3>
              </div>
              <div className="box">
                <h3>TV &#38; Home</h3>
              </div>
              <div className="box">
                <h3>Entertainment</h3>
              </div>
              <div className="box">
                <h3>Accessories</h3>
              </div>
              <div className="box">
                <h3>Support</h3>
              </div>
            </div>
        </div>
        <label htmlFor='close' className='background'></label>
            <div className="list">
              <div className="box">
                <h3>Store</h3>
                <div className=""></div>
              </div>
              <div className="box">
                <h3>Mac</h3>
                <div></div>
              </div>
              <div className="box">
                <h3>iPad</h3>
                <div></div>
              </div>
              <div className="box">
                <h3>iPhone</h3>
                <div></div>
              </div>
              <div className="box">
                <h3>Watch</h3>
              </div>
              <div className="box">
                <h3>Vision</h3>
              </div>
              <div className="box">
                <h3>AirPods</h3>
              </div>
              <div className="box">
                <h3>TV &#38; Home</h3>
              </div>
              <div className="box">
                <h3>Entertainment</h3>
              </div>
              <div className="box">
                <h3>Accessories</h3>
              </div>
              <div className="box">
                <h3>Support</h3>
              </div>
            </div>
        <div className="user">
          <GrSearch />
          <BsBag />
          {/* <button type="button" className="btn btn-outline-dark">Log In</button>
          <button type="button" className="btn btn-dark">Sign Up</button> */}
        </div>
      </div>
    </>
  )
}

export default Header;