// import 'bootstrap/dist/css/bootstrap.min.css';
// import video from "../../../Assets/large.mp4"
// // import { IoIosSearch, IoIosArrowForward } from "react-icons/io";
import Logo from '../../../Assets/apple.png';
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Low = () => {
  return (
    <>
      <div className="low">
        <div className="logo"><a href="/"><img src={Logo} alt="Apple"/></a></div>
        <div className="ac-gf-directory" aria-label="Apple Directory" role="navigation">
		      <div className="ac-gf-directory-column">
		      	<div className="section">
              <input className='input' hidden type='checkbox' id='list-one'/>
		      		<label htmlFor='list-one' className="section-title">Shop and Learn <span><IoIosArrowDown /></span></label>
		      		<ul className="section-list">
		      			<li className="section-item"><NavLink className="section-link" to="/store">Store</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/mac" data-analytics-title="mac">Mac</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/ipad" data-analytics-title="ipad">iPad</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/iphone" data-analytics-title="iphone">iPhone</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/watch/" data-analytics-title="watch">Watch</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/apple-vision-pro/" data-analytics-title="vision">Vision</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/airpods/" data-analytics-title="airpods">AirPods</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/tv-home/" data-analytics-title="tv and home">TV &amp; Home</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/airtag/" data-analytics-title="airtag">AirTag</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/us/shop/goto/buy_accessories" data-analytics-title="accessories">Accessories</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/us/shop/goto/giftcards" data-analytics-title="gift cards">Gift Cards</NavLink></li>
		      		</ul>
		      	</div>
		      	<div className="section">
              <input className='input' hidden type='checkbox' id='list-two'/>
		      		<label htmlFor='list-two' className="section-title">Apple Wallet <span><IoIosArrowDown /></span></label>
		      		<ul className="section-list">
		      			<li className="section-item"><NavLink className="section-link" to="/wallet/" data-analytics-title="wallet">Wallet</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/apple-card/" data-analytics-title="apple card">Apple Card</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/apple-pay/" data-analytics-title="apple pay">Apple Pay</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/apple-cash/" data-analytics-title="apple cash">Apple Cash</NavLink></li>
		      		</ul>
		      	</div>
		      </div>
		      <div className="ac-gf-directory-column">
		      	<div className="section">
              <input className='input' hidden type='checkbox' id='list-three'/>
		      		<label htmlFor='list-three' className="section-title">Account <span><IoIosArrowDown /></span></label>
		      		<ul className="section-list">
		      			<li className="section-item"><NavLink className="section-link" to="https://account.apple.com/" data-analytics-title="apple account" data-analytics-exit-link="">Manage Your Apple Account</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/us/shop/goto/account" data-analytics-title="apple store account">Apple Store Account</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="https://www.icloud.com" data-analytics-title="icloud.com" data-analytics-exit-link="">iCloud.com</NavLink></li>
		      		</ul>
		      	</div>
		      	<div className="section">
              <input className='input' hidden type='checkbox' id='list-four'/>
		      		<label htmlFor='list-four' className="section-title">Entertainment <span><IoIosArrowDown /></span></label>
		      		<ul className="section-list">
		      			<li className="section-item"><NavLink className="section-link" to="/apple-one/" data-analytics-title="apple one">Apple One</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/apple-tv/" data-analytics-title="">Apple TV</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/apple-music/" data-analytics-title="apple music">Apple Music</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/apple-arcade/" data-analytics-title="apple arcade">Apple Arcade</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/apple-fitness-plus/" data-analytics-title="apple fitness plus">Apple Fitness+</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/apple-news/" data-analytics-title="apple news plus">Apple News+</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/apple-podcasts/" data-analytics-title="apple podcasts">Apple Podcasts</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/apple-books/" data-analytics-title="apple books">Apple Books</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/app-store/" data-analytics-title="app store">App Store</NavLink></li>
		      		</ul>
		      	</div>
		      </div>
		      <div className="ac-gf-directory-column">
		      	<div className="section">
              <input className='input' hidden type='checkbox' id='list-five'/>
		      		<label htmlFor='list-five' className="section-title">Apple Store <span><IoIosArrowDown /></span></label>
		      		<ul className="section-list">
		      			<li className="section-item"><NavLink className="section-link" to="/retail/" data-analytics-title="find a store">Find a Store</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/retail/geniusbar/" data-analytics-title="genius bar">Genius Bar</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/today/" data-analytics-title="today at apple">Today at Apple</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/today/groups/" data-analytics-title="group reservations">Group Reservations</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/today/camp/" data-analytics-title="apple camp">Apple Camp</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="https://apps.apple.com/us/app/apple-store/id375380948" data-analytics-title="apple store app">Apple Store App</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/us/shop/goto/special_deals" data-analytics-title="certified refurbished">Certified Refurbished</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/us/shop/goto/trade_in" data-analytics-title="apple trade in">Apple Trade In</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/us/shop/goto/payment_plan" data-analytics-title="financing">Financing</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/us/shop/goto/buy_iphone/carrier_offers" data-analytics-title="carrier deals at apple">Carrier Deals at Apple</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/us/shop/goto/order/list" data-analytics-title="order status">Order Status</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/us/shop/goto/help" data-analytics-title="shopping help">Shopping Help</NavLink></li>
		      		</ul>
		      	</div>
		      </div>
		      <div className="ac-gf-directory-column">
		      	<div className="section">
              <input className='input' hidden type='checkbox' id='list-six'/>
		      		<label htmlFor='list-six' className="section-title">For Business <span><IoIosArrowDown /></span></label>
		      		<ul className="section-list">
		      			<li className="section-item"><NavLink className="section-link" to="/business/" data-analytics-title="apple and business">Apple and Business</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/retail/business/" data-analytics-title="shop for business">Shop for Business</NavLink></li>
		      		</ul>
		      	</div>
		      	<div className="section">
              <input className='input' hidden type='checkbox' id='list-seven'/>
		      		<label htmlFor='list-seven' className="section-title">For Education <span><IoIosArrowDown /></span></label>
		      		<ul className="section-list">
		      			<li className="section-item"><NavLink className="section-link" to="/education/" data-analytics-title="apple and education">Apple and Education</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/education/k12/how-to-buy/" data-analytics-title="shop for k12">Shop for K-12</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/us/shop/goto/educationrouting" data-analytics-title="shop for college">Shop for College</NavLink></li>
		      		</ul>
		      	</div>
		      	<div className="section">
              <input className='input' hidden type='checkbox' id='list-eight'/>
		      		<label htmlFor='list-eight' className="section-title">For Healthcare <span><IoIosArrowDown /></span></label>
		      		<ul className="section-list">
		      			<li className="section-item"><NavLink className="section-link" to="/healthcare/" data-analytics-title="apple and healthcare">Apple and Healthcare</NavLink></li>
		      		</ul>
		      	</div>
		      	<div className="section">
              <input className='input' hidden type='checkbox' id='list-nine'/>
		      		<label htmlFor='list-nine' className="section-title">For Government <span><IoIosArrowDown /></span></label>
		      		<ul className="section-list">
		      			<li className="section-item"><NavLink className="section-link" to="/government/" data-analytics-title="apple and government">Apple and Government</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/us/shop/goto/eppstore/veteransandmilitary" data-analytics-title="shop for veterans and military">Shop for Veterans and Military</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/us_epp_67909/store" data-analytics-title="shop for state and local employees">Shop for State and Local Employees</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/us_epp_55499/store" data-analytics-title="shop for federal employees">Shop for Federal Employees</NavLink></li>
		      		</ul>
		      	</div>
		      </div>
		      <div className="ac-gf-directory-column">
		      	<div className="section">
              <input className='input' hidden type='checkbox' id='list-ten'/>
		      		<label htmlFor='list-ten' className="section-title">Apple Values <span><IoIosArrowDown /></span></label>
		      		<ul className="section-list">
		      			<li className="section-item"><NavLink className="section-link" to="/accessibility/" data-analytics-title="accessibility">Accessibility</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/education-initiative/" data-analytics-title="education">Education</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/environment/" data-analytics-title="environment">Environment</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/diversity/" data-analytics-title="inclusion and diversity">Inclusion and Diversity</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/privacy/" data-analytics-title="privacy">Privacy</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/racial-equity-justice-initiative/" data-analytics-title="racial equity and justice">Racial Equity and Justice</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/supply-chain/" data-analytics-title="supply chain innovation">Supply Chain Innovation</NavLink></li>
		      		</ul>
		      	</div>
		      	<div className="section">
              <input className='input' hidden type='checkbox' id='list-eleven'/>
		      		<label htmlFor='list-eleven' className="section-title">About Apple <span><IoIosArrowDown /></span></label>
		      		<ul className="section-list">
		      			<li className="section-item"><NavLink className="section-link" to="/newsroom/" data-analytics-title="newsroom">Newsroom</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/leadership/" data-analytics-title="apple leadership">Apple Leadership</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/careers/us/" data-analytics-title="career opportunities">Career Opportunities</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="https://investor.apple.com/" data-analytics-title="investors" data-analytics-exit-link="">Investors</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/compliance/" data-analytics-title="ethics and compliance">Ethics &amp; Compliance</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/apple-events/" data-analytics-title="events">Events</NavLink></li>
		      			<li className="section-item"><NavLink className="section-link" to="/contact/" data-analytics-title="contact apple">Contact Apple</NavLink></li>
		      		</ul>
		      	</div>
		      </div>
	      </div>
      </div>
    </>
  );
}

export default Low;

