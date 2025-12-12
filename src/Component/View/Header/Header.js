import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { GrSearch } from "react-icons/gr";
import { BsBag } from "react-icons/bs";
import { FaGripLines } from "react-icons/fa6";
import { IoLogoApple, IoMdClose, IoIosSearch, IoIosArrowRoundForward, IoIosBookmark, IoIosPlayCircle } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { RiBox3Line } from "react-icons/ri";
// import { NavLink, useNavigate } from "react-router-dom";

const Header = (props) => {
  const [isShowNav, setIsShowNav] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isBag, setIsBag] = useState(false);
  // const navigate = useNavigate();
  
  const HandleNav = () => {
    setIsShowNav(!isShowNav);
    if (isSearch) {
      setIsSearch(!isSearch);
    }
    
    if (isBag) {
      setIsBag(!isBag);
    }
  }

  const Search = () => {
    setIsSearch(!isSearch);
  }

  const Bag = () => {
    setIsBag(!isBag);
  }

  return(
    <>
      <div className="header-container">
        <div className='header-background'>
          <div className="logo"><NavLink to="/" className="navbar-brand"><IoLogoApple /></NavLink></div>
          <div className="responsive">
            <div className="label" onClick={() => HandleNav()}><FaGripLines /></div>
            <span onClick={() => HandleNav()} className='background' style={isShowNav ? {display : "block"} : {display : "none"}}></span>
            <div className="list" style={isShowNav ? {transform : "translateX(0)"} : {transform : "translateX(100%)"}}>
              <span className="close" onClick={() => HandleNav()}><IoMdClose /></span>
              <div className="box">
                <h3 onClick={() => HandleNav()}><NavLink to="/store" className="navbar-brand">Store</NavLink></h3>
                <div className=""></div>
              </div>
              <div className="box">
                <h3 onClick={() => HandleNav()}><NavLink to="/mac" className="navbar-brand">Mac</NavLink></h3>
                <div></div>
              </div>
              <div className="box">
                <h3 onClick={() => HandleNav()}><NavLink to="/" className="navbar-brand">iPad</NavLink></h3>
                <div></div>
              </div>
              <div className="box">
                <h3 onClick={() => HandleNav()}><NavLink to="/" className="navbar-brand">iPhone</NavLink></h3>
                <div></div>
              </div>
              <div className="box">
                <h3 onClick={() => HandleNav()}><NavLink to="/" className="navbar-brand">Watch</NavLink></h3>
              </div>
              <div className="box">
                <h3 onClick={() => HandleNav()}><NavLink to="/" className="navbar-brand">Vision</NavLink></h3>
              </div>
              <div className="box">
                <h3 onClick={() => HandleNav()}><NavLink to="/" className="navbar-brand">AirPods</NavLink></h3>
              </div>
              <div className="box">
                <h3 onClick={() => HandleNav()}><NavLink to="/" className="navbar-brand">TV &#38; Home</NavLink></h3>
              </div>
              <div className="box">
                <h3 onClick={() => HandleNav()}><NavLink to="/" className="navbar-brand">Entertainment</NavLink></h3>
              </div>
              <div className="box">
                <h3 onClick={() => HandleNav()}><NavLink to="/" className="navbar-brand">Accessories</NavLink></h3>
              </div>
              <div className="box">
                <h3 onClick={() => HandleNav()}><NavLink to="/" className="navbar-brand">Support</NavLink></h3>
              </div>
            </div>
          </div>
          <div className="list" onMouseEnter={() => setIsSearch(false)}>
            <div className="box">
              <h3><NavLink to="/store" className="navbar-brand">Store</NavLink></h3>
              <div className="header-store">
                <div className="secondary">
                  <div className="flex">
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Shop</h2>
                      <ul className="secondary-list">
                        <li><a href="/store" className="secondary-link">Shop Gifts</a></li> 
                        <li><a href="/mac" className="secondary-link" title="mac">Mac</a></li> 
                        <li><a href="/ipad" className="secondary-link" title="ipad">iPad</a></li> 
                        <li><a href="/iphone" className="secondary-link" title="iphone">iPhone</a></li>
                        <li><a href="/" className="secondary-link" title="apple watch">Apple Watch</a></li>
                        <li><a href="/" className="secondary-link" title="apple vision pro">Apple Vision Pro</a></li>
                        <li><a href="/" className="secondary-link" title="airpods">AirPods</a></li>
                        <li><a href="/" className="secondary-link" title="accessories">Accessories</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Quick Links</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">Apple Store Shopping Event</a></li>
                        <li><a href="/" className="secondary-link">Find a Store</a></li>
                        <li><a href="/" className="secondary-link">Order Status</a></li>
                        <li><a href="/" className="secondary-link">Apple Trade In</a></li>
                        <li><a href="/" className="secondary-link">Financing</a></li>
                        <li><a href="/" className="secondary-link">Personal Setup</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Shop Special Stores</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">Certified Refurbished</a></li>
                        <li><a href="/" className="secondary-link">Education</a></li>
                        <li><a href="/" className="secondary-link">Business</a></li>
                        <li><a href="/" className="secondary-link">Veterans and Military</a></li>
                        <li><a href="/" className="secondary-link">Government</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <h3><NavLink to="/mac" className="navbar-brand">Mac</NavLink></h3>
              <div className="header-store">
                <div className="secondary">
                  <div className="flex">
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Explore Mac</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link" title="Explore All Mac">Explore All Mac</a></li> 
                        <li><a href="/" className="secondary-link" title="MacBook Air">MacBook Air</a></li> 
                        <li><a href="/" className="secondary-link" title="MacBook Pro">MacBook Pro</a></li> 
                        <li><a href="/" className="secondary-link" title="iMac">iMac</a></li>
                        <li><a href="/" className="secondary-link" title="Mac mini">Mac mini</a></li>
                        <li><a href="/" className="secondary-link" title="Mac Studio">Mac Studio</a></li>
                        <li><a href="/" className="secondary-link" title="Mac Pro">Mac Pro</a></li>
                        <li><a href="/" className="secondary-link" title="Displays">Displays</a></li>
                      </ul>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link" title="Compare Mac">Compare Mac</a></li>
                        <li><a href="/" className="secondary-link" title="Switch from PC to Mac">Switch from PC to Mac</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Shop Mac</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">Shop Mac</a></li>
                        <li><a href="/" className="secondary-link">Apple Store Shopping Event</a></li>
                        <li><a href="/" className="secondary-link">Help Me Choose</a></li>
                        <li><a href="/" className="secondary-link">Mac Accessories</a></li>
                        <li><a href="/" className="secondary-link">Apple Trade In</a></li>
                        <li><a href="/" className="secondary-link">Financing</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">More from Mac</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">Mac Support</a></li>
                        <li><a href="/" className="secondary-link">AppleCare</a></li>
                        <li><a href="/" className="secondary-link">macOS Tahoe</a></li>
                        <li><a href="/" className="secondary-link">Apple Intelligence</a></li>
                        <li><a href="/" className="secondary-link">Apps by Apple</a></li>
                        <li><a href="/" className="secondary-link">Better with iPhone</a></li>
                        <li><a href="/" className="secondary-link">iCloud+</a></li>
                        <li><a href="/" className="secondary-link">Mac for Business</a></li>
                        <li><a href="/" className="secondary-link">Education</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <h3><NavLink to="/" className="navbar-brand">iPad</NavLink></h3>
              <div className="header-store">
                <div className="secondary">
                  <div className="flex">
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Explore iPad</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link" title="Explore All iPad">Explore All iPad</a></li> 
                        <li><a href="/" className="secondary-link" title="iPad Pro">iPad Pro</a></li> 
                        <li><a href="/" className="secondary-link" title="iPad Air">iPad Air</a></li> 
                        <li><a href="/" className="secondary-link" title="iPad">iPad</a></li>
                        <li><a href="/" className="secondary-link" title="iPad mini">iPad mini</a></li>
                        <li><a href="/" className="secondary-link" title="Apple Pencil">Apple Pencil</a></li>
                        <li><a href="/" className="secondary-link" title="Keyboards">Keyboards</a></li>
                      </ul>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link" title="Compare iPad">Compare iPad</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Shop iPad</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">Shop iPad</a></li>
                        <li><a href="/" className="secondary-link">Apple Store Shopping Event</a></li>
                        <li><a href="/" className="secondary-link">iPad Accessories</a></li>
                        <li><a href="/" className="secondary-link">Apple Trade In</a></li>
                        <li><a href="/" className="secondary-link">Financing</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">More from iPad</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">iPad Support</a></li>
                        <li><a href="/" className="secondary-link">AppleCare</a></li>
                        <li><a href="/" className="secondary-link">iPadOS 26</a></li>
                        <li><a href="/" className="secondary-link">Apple Intelligence</a></li>
                        <li><a href="/" className="secondary-link">Apps by Apple</a></li>
                        <li><a href="/" className="secondary-link">iCloud+</a></li>
                        <li><a href="/" className="secondary-link">Education</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <h3><NavLink to="/" className="navbar-brand">iPhone</NavLink></h3>
              <div className="header-store">
                <div className="secondary">
                  <div className="flex">
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Explore iPhone</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link" title="Explore All iPhone">Explore All iPhone</a></li> 
                        <li><a href="/" className="secondary-link" title="iPhone 17 Pro">iPhone 17 Pro</a></li> 
                        <li><a href="/" className="secondary-link" title="iPhone Air">iPhone Air</a></li> 
                        <li><a href="/" className="secondary-link" title="iPhone 17">iPhone 17</a></li>
                        <li><a href="/" className="secondary-link" title="iPhone 16">iPhone 16</a></li>
                        <li><a href="/" className="secondary-link" title="iPhone 16e">iPhone 16e</a></li>
                      </ul>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link" title="Compare iPhone">Compare iPhone</a></li>
                        <li><a href="/" className="secondary-link" title="Switch from Android">Switch from Android</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Shop iPhone</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">Shop iPhone</a></li>
                        <li><a href="/" className="secondary-link">Apple Store Shopping Event</a></li>
                        <li><a href="/" className="secondary-link">iPhone Accessories</a></li>
                        <li><a href="/" className="secondary-link">Apple Trade In</a></li>
                        <li><a href="/" className="secondary-link">Carrier Deals at Apple</a></li>
                        <li><a href="/" className="secondary-link">Financing</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">More from iPhone</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">iPhone Support</a></li>
                        <li><a href="/" className="secondary-link">AppleCare</a></li>
                        <li><a href="/" className="secondary-link">iOS 26</a></li>
                        <li><a href="/" className="secondary-link">Apple Intelligence</a></li>
                        <li><a href="/" className="secondary-link">Apps by Apple</a></li>
                        <li><a href="/" className="secondary-link">iPhone Privacy</a></li>
                        <li><a href="/" className="secondary-link">Better with Mac</a></li>
                        <li><a href="/" className="secondary-link">iCloud+</a></li>
                        <li><a href="/" className="secondary-link">Wallet, Pay, Card</a></li>
                        <li><a href="/" className="secondary-link">Siri</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <h3><NavLink to="/" className="navbar-brand">Watch</NavLink></h3>
              <div className="header-store">
                <div className="secondary">
                  <div className="flex">
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Explore Watch</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link" title="Explore All Apple Watch">Explore All Apple Watch</a></li> 
                        <li><a href="/" className="secondary-link" title="Apple Watch Series 11">Apple Watch Series 11</a></li> 
                        <li><a href="/" className="secondary-link" title="Apple Watch SE 3">Apple Watch SE 3</a></li> 
                        <li><a href="/" className="secondary-link" title="Apple Watch Ultra 3">Apple Watch Ultra 3</a></li>
                        <li><a href="/" className="secondary-link" title="Apple Watch Nike">Apple Watch Nike</a></li>
                        <li><a href="/" className="secondary-link" title="apple vision pro">Apple Watch Hermès</a></li>
                      </ul>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link" title="Compare Watch">Compare Watch</a></li>
                        <li><a href="/" className="secondary-link" title="Why Apple Watch">Why Apple Watch</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Shop Watch</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">Shop Apple Watch</a></li>
                        <li><a href="/" className="secondary-link">Apple Store Shopping Event</a></li>
                        <li><a href="/" className="secondary-link">Apple Watch Bands</a></li>
                        <li><a href="/" className="secondary-link">Apple Watch Accessories</a></li>
                        <li><a href="/" className="secondary-link">Apple Trade In</a></li>
                        <li><a href="/" className="secondary-link">Financing</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">More from Watch</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">Apple Watch Support</a></li>
                        <li><a href="/" className="secondary-link">AppleCare</a></li>
                        <li><a href="/" className="secondary-link">watchOS 26</a></li>
                        <li><a href="/" className="secondary-link">Apple Watch For Your Kids</a></li>
                        <li><a href="/" className="secondary-link">Apps by Apple</a></li>
                        <li><a href="/" className="secondary-link">Apple Fitness+</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <h3><NavLink to="/" className="navbar-brand">Vision</NavLink></h3>
              <div className="header-store">
                <div className="secondary">
                  <div className="flex">
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Explore Vision</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link" title="Explore Apple Vision Pro">Explore Apple Vision Pro</a></li>
                      </ul>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link" title="Tech Specs">Tech Specs</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Shop Vision</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">Shop Apple Vision Pro</a></li>
                        <li><a href="/" className="secondary-link">Apple Vision Pro Accessories</a></li>
                        <li><a href="/" className="secondary-link">Book a Demo</a></li>
                        <li><a href="/" className="secondary-link">Financing</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">More from Vision</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">Apple Vision Pro Support</a></li>
                        <li><a href="/" className="secondary-link">AppleCare</a></li>
                        <li><a href="/" className="secondary-link">visionOS 26</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <h3><NavLink to="/" className="navbar-brand">AirPods</NavLink></h3>
              <div className="header-store">
                <div className="secondary">
                  <div className="flex">
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Explore AirPods</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link" title="Explore All AirPods">Explore All AirPods</a></li> 
                        <li><a href="/" className="secondary-link" title="AirPods 4">AirPods 4</a></li> 
                        <li><a href="/" className="secondary-link" title="AirPods Pro 3">AirPods Pro 3</a></li> 
                        <li><a href="/" className="secondary-link" title="AirPods Max">AirPods Max</a></li>
                      </ul>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link" title="Compare AirPods">Compare AirPods</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Shop AirPods</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">Shop AirPods</a></li>
                        <li><a href="/" className="secondary-link">Apple Store Shopping Event</a></li>
                        <li><a href="/" className="secondary-link">AirPods Accessories</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">More from AirPods</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">AirPods Support</a></li>
                        <li><a href="/" className="secondary-link">AppleCare</a></li>
                        <li><a href="/" className="secondary-link">Hearing Health</a></li>
                        <li><a href="/" className="secondary-link">Apple Music</a></li>
                        <li><a href="/" className="secondary-link">Apple Fitness+</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <h3><NavLink to="/" className="navbar-brand">TV &#38; Home</NavLink></h3>
              <div className="header-store">
                <div className="secondary">
                  <div className="flex">
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Explore TV &amp; Home</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link" title="Explore TV &amp; Home">Explore TV &amp; Home</a></li> 
                        <li><a href="/" className="secondary-link" title="Apple TV 4K">Apple TV 4K</a></li> 
                        <li><a href="/" className="secondary-link" title="HomePod">HomePod</a></li> 
                        <li><a href="/" className="secondary-link" title="HomePod mini">HomePod mini</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Shop TV &amp; Home</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">Apple Store Shopping Event</a></li>
                        <li><a href="/" className="secondary-link">Shop Apple TV 4K</a></li>
                        <li><a href="/" className="secondary-link">Shop HomePod</a></li>
                        <li><a href="/" className="secondary-link">Shop HomePod mini</a></li>
                        <li><a href="/" className="secondary-link">Shop Siri Remote</a></li>
                        <li><a href="/" className="secondary-link">TV &amp; Home Accessories</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">More from TV &amp; Home</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">Apple TV Support</a></li>
                        <li><a href="/" className="secondary-link">HomePod Support</a></li>
                        <li><a href="/" className="secondary-link">AppleCare for Apple TV</a></li>
                        <li><a href="/" className="secondary-link">AppleCare for HomePod</a></li>
                        <li><a href="/" className="secondary-link">Apple TV app</a></li>
                        <li><a href="/" className="secondary-link">Apple TV</a></li>
                        <li><a href="/" className="secondary-link">Home app</a></li>
                        <li><a href="/" className="secondary-link">Apple Music</a></li>
                        <li><a href="/" className="secondary-link">Siri</a></li>
                        <li><a href="/" className="secondary-link">AirPlay</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <h3><NavLink to="/" className="navbar-brand">Entertainment</NavLink></h3>
              <div className="header-store">
                <div className="secondary">
                  <div className="flex">
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Explore Entertainment</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link" title="Explore Entertainment">Explore Entertainment</a></li> 
                        <li><a href="/" className="secondary-link" title="Apple One">Apple One</a></li> 
                        <li><a href="/" className="secondary-link" title="Apple TV">Apple TV</a></li> 
                        <li><a href="/" className="secondary-link" title="Apple Music">Apple Music</a></li>
                        <li><a href="/" className="secondary-link" title="Apple Arcade">Apple Arcade</a></li>
                        <li><a href="/" className="secondary-link" title="Apple Fitness+">Apple Fitness+</a></li>
                        <li><a href="/" className="secondary-link" title="Apple News+">Apple News+</a></li>
                        <li><a href="/" className="secondary-link" title="accessories">Apple Podcasts</a></li>
                        <li><a href="/" className="secondary-link" title="Apple Books">Apple Books</a></li>
                        <li><a href="/" className="secondary-link" title="accessories">App Store</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Support</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">Apple TV Support</a></li>
                        <li><a href="/" className="secondary-link">Apple Music Support</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <h3><NavLink to="/" className="navbar-brand">Accessories</NavLink></h3>
              <div className="header-store">
                <div className="secondary">
                  <div className="flex">
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Shop Accessories</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link" title="Shop All Accessories">Shop All Accessories</a></li> 
                        <li><a href="/" className="secondary-link" title="mac">Mac</a></li> 
                        <li><a href="/" className="secondary-link" title="ipad">iPad</a></li> 
                        <li><a href="/" className="secondary-link" title="iphone">iPhone</a></li>
                        <li><a href="/" className="secondary-link" title="apple watch">Apple Watch</a></li>
                        <li><a href="/" className="secondary-link" title="apple vision pro">Apple Vision Pro</a></li>
                        <li><a href="/" className="secondary-link" title="airpods">AirPods</a></li>
                        <li><a href="/" className="secondary-link" title="TV &amp; Home">TV &amp; Home</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Explore Accessories</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">Made by Apple</a></li>
                        <li><a href="/" className="secondary-link">Beats</a></li>
                        <li><a href="/" className="secondary-link">AirTag</a></li>
                        <li><a href="/" className="secondary-link">Assistive Technologies</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <h3><NavLink to="/" className="navbar-brand">Support</NavLink></h3>
              <div className="header-store">
                <div className="secondary">
                  <div className="flex">
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Explore Support</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link" title="iPhone">iPhone</a></li> 
                        <li><a href="/" className="secondary-link" title="mac">Mac</a></li> 
                        <li><a href="/" className="secondary-link" title="ipad">iPad</a></li> 
                        <li><a href="/" className="secondary-link" title="Watch">Watch</a></li>
                        <li><a href="/" className="secondary-link" title="Apple Vision Pro">Apple Vision Pro</a></li>
                        <li><a href="/" className="secondary-link" title="AirPods">AirPods</a></li>
                        <li><a href="/" className="secondary-link" title="Music">Music</a></li>
                        <li><a href="/" className="secondary-link" title="TV">TV</a></li>
                      </ul>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link" title="Explore Support">Explore Support</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Get Help</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">Community</a></li>
                        <li><a href="/" className="secondary-link">Check Coverage</a></li>
                        <li><a href="/" className="secondary-link">Genius Bar</a></li>
                        <li><a href="/" className="secondary-link">Repair</a></li>
                      </ul>
                    </div>
                    <div className="secondary-item">
                      <h2 className="secondary-title m-0">Helpful Topics</h2>
                      <ul className="secondary-list">
                        <li><a href="/" className="secondary-link">Get AppleCare</a></li>
                        <li><a href="/" className="secondary-link">Apple Account and Password</a></li>
                        <li><a href="/" className="secondary-link">Billing &amp; Subscriptions</a></li>
                        <li><a href="/" className="secondary-link">Accessibility</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="user">
            <span style={{cursor : "pointer"}} onClick={() => Search()} onMouseEnter={() => setIsBag(false)}><GrSearch /></span>
            <div className="seach" style={isSearch ? {transform : "translateY(0)"} : {transform : "translateY(calc(-100% - 40px))"}} onMouseLeave={() => setIsSearch(false)}>
              <div className="searchfield">
                <div className="search-title">
                  <span><IoIosSearch/></span> 
                  <input placeholder="Search apple.com" aria-label="Search apple.com" className="searchfield-input"/>
                </div>
                <div className="secondary-item">
                  <h2 className="secondary-title m-0">Quick Links</h2>
                  <ul className="secondary-list">
                    <li><a className="secondary-link" href="https://www.apple.com/us/shop/goto/store"><span><IoIosArrowRoundForward /></span> Shop Gifts</a></li>
                    <li><a className="secondary-link" href="https://www.apple.com/retail/"><span><IoIosArrowRoundForward /></span> Find a Store</a></li>
                    <li><a className="secondary-link" href="https://www.apple.com/us/shop/goto/giftcards"><span><IoIosArrowRoundForward /></span> Apple Gift Card</a></li>
                    <li><a className="secondary-link" href="https://www.apple.com/apple-vision-pro/"><span><IoIosArrowRoundForward /></span> Apple Vision Pro</a></li>
                    <li><a className="secondary-link" href="https://www.apple.com/us/shop/goto/trade_in"><span><IoIosArrowRoundForward /></span> Apple Trade In</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <span style={{cursor : "pointer"}} onClick={() => Bag()} onMouseEnter={() => setIsSearch(false)}><BsBag /></span>
            <div className="bag" style={isBag ? {transform : "translateY(0)"} : {transform : "translateY(calc(-100% - 40px))"}} onMouseLeave={() => setIsBag(false)}>
              <div className="bagfield">
                <div className="bag-title">
                  <p className="fs-4 m-0">Your Bag is empty</p>
                  <p className="fonts m-0"><a href="/"><ins>Sign in</ins></a> to see if you have any saved items</p>
                </div>
                <div className="secondary-item">
                  <h2 className="secondary-title m-0">My Profile</h2>
                  <ul className="secondary-list">
                    <li><a className="secondary-link" href="/"><span><RiBox3Line /></span> Orders</a></li>
                    <li><a className="secondary-link" href="/"><span><IoIosBookmark /></span> Your Saves</a></li>
                    <li><a className="secondary-link" href="/"><span><IoIosPlayCircle /></span> Account</a></li>
                    <li><a className="secondary-link" href="/"><span><FaUserCircle /></span> Sign in</a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <button type="button" className="btn btn-outline-dark">Log In</button>
            <button type="button" className="btn btn-dark">Sign Up</button> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;