import Logo from '../../../Assets/apple.png';
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="logo"><a href="/"><img src={Logo} alt="Apple"/></a></div>
      <div className="ac-gf-directory" aria-label="Apple Directory" role="navigation">
		    <div className="ac-gf-directory-column">
		    	<div className="section">
            <input className='input' hidden type='checkbox' id='list-one'/>
		    		<label htmlFor='list-one' className="section-title">Shop and Learn <span><IoIosArrowDown /></span></label>
		    		<ul className="section-list">
		    			<li className="section-item"><a className="section-link" href="/us/shop/goto/store" data-analytics-title="store">Store</a></li>
		    			<li className="section-item"><a className="section-link" href="/mac/" data-analytics-title="mac">Mac</a></li>
		    			<li className="section-item"><a className="section-link" href="/ipad/" data-analytics-title="ipad">iPad</a></li>
		    			<li className="section-item"><a className="section-link" href="/iphone/" data-analytics-title="iphone">iPhone</a></li>
		    			<li className="section-item"><a className="section-link" href="/watch/" data-analytics-title="watch">Watch</a></li>
		    			<li className="section-item"><a className="section-link" href="/apple-vision-pro/" data-analytics-title="vision">Vision</a></li>
		    			<li className="section-item"><a className="section-link" href="/airpods/" data-analytics-title="airpods">AirPods</a></li>
		    			<li className="section-item"><a className="section-link" href="/tv-home/" data-analytics-title="tv and home">TV &amp; Home</a></li>
		    			<li className="section-item"><a className="section-link" href="/airtag/" data-analytics-title="airtag">AirTag</a></li>
		    			<li className="section-item"><a className="section-link" href="/us/shop/goto/buy_accessories" data-analytics-title="accessories">Accessories</a></li>
		    			<li className="section-item"><a className="section-link" href="/us/shop/goto/giftcards" data-analytics-title="gift cards">Gift Cards</a></li>
		    		</ul>
		    	</div>
		    	<div className="section">
            <input className='input' hidden type='checkbox' id='list-two'/>
		    		<label htmlFor='list-two' className="section-title">Apple Wallet <span><IoIosArrowDown /></span></label>
		    		<ul className="section-list">
		    			<li className="section-item" ><a className="section-link" href="/wallet/" data-analytics-title="wallet">Wallet</a></li>
		    			<li className="section-item"><a className="section-link" href="/apple-card/" data-analytics-title="apple card">Apple Card</a></li>
		    			<li className="section-item"><a className="section-link" href="/apple-pay/" data-analytics-title="apple pay">Apple Pay</a></li>
		    			<li className="section-item"><a className="section-link" href="/apple-cash/" data-analytics-title="apple cash">Apple Cash</a></li>
		    		</ul>
		    	</div>
		    </div>
		    <div className="ac-gf-directory-column">
		    	<div className="section">
            <input className='input' hidden type='checkbox' id='list-three'/>
		    		<label htmlFor='list-three' className="section-title">Account <span><IoIosArrowDown /></span></label>
		    		<ul className="section-list">
		    			<li className="section-item"><a className="section-link" href="https://account.apple.com/" data-analytics-title="apple account" data-analytics-exit-link="">Manage Your Apple Account</a></li>
		    			<li className="section-item"><a className="section-link" href="/us/shop/goto/account" data-analytics-title="apple store account">Apple Store Account</a></li>
		    			<li className="section-item"><a className="section-link" href="https://www.icloud.com" data-analytics-title="icloud.com" data-analytics-exit-link="">iCloud.com</a></li>
		    		</ul>
		    	</div>
		    	<div className="section">
            <input className='input' hidden type='checkbox' id='list-four'/>
		    		<label htmlFor='list-four' className="section-title">Entertainment <span><IoIosArrowDown /></span></label>
		    		<ul className="section-list">
		    			<li className="section-item"><a className="section-link" href="/apple-one/" data-analytics-title="apple one">Apple One</a></li>
		    			<li className="section-item"><a className="section-link" href="/apple-tv/" data-analytics-title="">Apple TV</a></li>
		    			<li className="section-item"><a className="section-link" href="/apple-music/" data-analytics-title="apple music">Apple Music</a></li>
		    			<li className="section-item"><a className="section-link" href="/apple-arcade/" data-analytics-title="apple arcade">Apple Arcade</a></li>
		    			<li className="section-item"><a className="section-link" href="/apple-fitness-plus/" data-analytics-title="apple fitness plus">Apple Fitness+</a></li>
		    			<li className="section-item"><a className="section-link" href="/apple-news/" data-analytics-title="apple news plus">Apple News+</a></li>
		    			<li className="section-item"><a className="section-link" href="/apple-podcasts/" data-analytics-title="apple podcasts">Apple Podcasts</a></li>
		    			<li className="section-item"><a className="section-link" href="/apple-books/" data-analytics-title="apple books">Apple Books</a></li>
		    			<li className="section-item"><a className="section-link" href="/app-store/" data-analytics-title="app store">App Store</a></li>
		    		</ul>
		    	</div>
		    </div>
		    <div className="ac-gf-directory-column">
		    	<div className="section">
            <input className='input' hidden type='checkbox' id='list-five'/>
		    		<label htmlFor='list-five' className="section-title">Apple Store <span><IoIosArrowDown /></span></label>
		    		<ul className="section-list">
		    			<li className="section-item"><a className="section-link" href="/retail/" data-analytics-title="find a store">Find a Store</a></li>
		    			<li className="section-item"><a className="section-link" href="/retail/geniusbar/" data-analytics-title="genius bar">Genius Bar</a></li>
		    			<li className="section-item"><a className="section-link" href="/today/" data-analytics-title="today at apple">Today at Apple</a></li>
		    			<li className="section-item"><a className="section-link" href="/today/groups/" data-analytics-title="group reservations">Group Reservations</a></li>
		    			<li className="section-item"><a className="section-link" href="/today/camp/" data-analytics-title="apple camp">Apple Camp</a></li>
		    			<li className="section-item"><a className="section-link" href="https://apps.apple.com/us/app/apple-store/id375380948" data-analytics-title="apple store app">Apple Store App</a></li>
		    			<li className="section-item"><a className="section-link" href="/us/shop/goto/special_deals" data-analytics-title="certified refurbished">Certified Refurbished</a></li>
		    			<li className="section-item"><a className="section-link" href="/us/shop/goto/trade_in" data-analytics-title="apple trade in">Apple Trade In</a></li>
		    			<li className="section-item"><a className="section-link" href="/us/shop/goto/payment_plan" data-analytics-title="financing">Financing</a></li>
		    			<li className="section-item"><a className="section-link" href="/us/shop/goto/buy_iphone/carrier_offers" data-analytics-title="carrier deals at apple">Carrier Deals at Apple</a></li>
		    			<li className="section-item"><a className="section-link" href="/us/shop/goto/order/list" data-analytics-title="order status">Order Status</a></li>
		    			<li className="section-item"><a className="section-link" href="/us/shop/goto/help" data-analytics-title="shopping help">Shopping Help</a></li>
		    		</ul>
		    	</div>
		    </div>
		    <div className="ac-gf-directory-column">
		    	<div className="section">
            <input className='input' hidden type='checkbox' id='list-six'/>
		    		<label htmlFor='list-six' className="section-title">For Business <span><IoIosArrowDown /></span></label>
		    		<ul className="section-list">
		    			<li className="section-item"><a className="section-link" href="/business/" data-analytics-title="apple and business">Apple and Business</a></li>
		    			<li className="section-item"><a className="section-link" href="/retail/business/" data-analytics-title="shop for business">Shop for Business</a></li>
		    		</ul>
		    	</div>
		    	<div className="section">
            <input className='input' hidden type='checkbox' id='list-seven'/>
		    		<label htmlFor='list-seven' className="section-title">For Education <span><IoIosArrowDown /></span></label>
		    		<ul className="section-list">
		    			<li className="section-item"><a className="section-link" href="/education/" data-analytics-title="apple and education">Apple and Education</a></li>
		    			<li className="section-item"><a className="section-link" href="/education/k12/how-to-buy/" data-analytics-title="shop for k12">Shop for K-12</a></li>
		    			<li className="section-item"><a className="section-link" href="/us/shop/goto/educationrouting" data-analytics-title="shop for college">Shop for College</a></li>
		    		</ul>
		    	</div>
		    	<div className="section">
            <input className='input' hidden type='checkbox' id='list-eight'/>
		    		<label htmlFor='list-eight' className="section-title">For Healthcare <span><IoIosArrowDown /></span></label>
		    		<ul className="section-list">
		    			<li className="section-item"><a className="section-link" href="/healthcare/" data-analytics-title="apple and healthcare">Apple and Healthcare</a></li>
		    		</ul>
		    	</div>
		    	<div className="section">
            <input className='input' hidden type='checkbox' id='list-nine'/>
		    		<label htmlFor='list-nine' className="section-title">For Government <span><IoIosArrowDown /></span></label>
		    		<ul className="section-list">
		    			<li className="section-item"><a className="section-link" href="/government/" data-analytics-title="apple and government">Apple and Government</a></li>
		    			<li className="section-item"><a className="section-link" href="/us/shop/goto/eppstore/veteransandmilitary" data-analytics-title="shop for veterans and military">Shop for Veterans and Military</a></li>
		    			<li className="section-item"><a className="section-link" href="/us_epp_67909/store" data-analytics-title="shop for state and local employees">Shop for State and Local Employees</a></li>
		    			<li className="section-item"><a className="section-link" href="/us_epp_55499/store" data-analytics-title="shop for federal employees">Shop for Federal Employees</a></li>
		    		</ul>
		    	</div>
		    </div>
		    <div className="ac-gf-directory-column">
		    	<div className="section">
            <input className='input' hidden type='checkbox' id='list-ten'/>
		    		<label htmlFor='list-ten' className="section-title">Apple Values <span><IoIosArrowDown /></span></label>
		    		<ul className="section-list">
		    			<li className="section-item"><a className="section-link" href="/accessibility/" data-analytics-title="accessibility">Accessibility</a></li>
		    			<li className="section-item"><a className="section-link" href="/education-initiative/" data-analytics-title="education">Education</a></li>
		    			<li className="section-item"><a className="section-link" href="/environment/" data-analytics-title="environment">Environment</a></li>
		    			<li className="section-item"><a className="section-link" href="/diversity/" data-analytics-title="inclusion and diversity">Inclusion and Diversity</a></li>
		    			<li className="section-item"><a className="section-link" href="/privacy/" data-analytics-title="privacy">Privacy</a></li>
		    			<li className="section-item"><a className="section-link" href="/racial-equity-justice-initiative/" data-analytics-title="racial equity and justice">Racial Equity and Justice</a></li>
		    			<li className="section-item"><a className="section-link" href="/supply-chain/" data-analytics-title="supply chain innovation">Supply Chain Innovation</a></li>
		    		</ul>
		    	</div>
		    	<div className="section">
            <input className='input' hidden type='checkbox' id='list-eleven'/>
		    		<label htmlFor='list-eleven' className="section-title">About Apple <span><IoIosArrowDown /></span></label>
		    		<ul className="section-list">
		    			<li className="section-item"><a className="section-link" href="/newsroom/" data-analytics-title="newsroom">Newsroom</a></li>
		    			<li className="section-item"><a className="section-link" href="/leadership/" data-analytics-title="apple leadership">Apple Leadership</a></li>
		    			<li className="section-item"><a className="section-link" href="/careers/us/" data-analytics-title="career opportunities">Career Opportunities</a></li>
		    			<li className="section-item"><a className="section-link" href="https://investor.apple.com/" data-analytics-title="investors" data-analytics-exit-link="">Investors</a></li>
		    			<li className="section-item"><a className="section-link" href="/compliance/" data-analytics-title="ethics and compliance">Ethics &amp; Compliance</a></li>
		    			<li className="section-item"><a className="section-link" href="/apple-events/" data-analytics-title="events">Events</a></li>
		    			<li className="section-item"><a className="section-link" href="/contact/" data-analytics-title="contact apple">Contact Apple</a></li>
		    		</ul>
		    	</div>
		    </div>
	    </div>
      <div className="ac-gf-footer">
	    	<div className="shop">
	    		More ways to shop: <a href="/retail/"><ins>Find an Apple Store</ins></a> or <a href="https://locate.apple.com/"><ins>other retailer</ins></a> near you. <span className="nowrap">Or call <a href="tel:1-800-692-7753"><ins>1-800-MY-APPLE</ins></a> (1-800-692-7753).</span>
	    	</div>
	    	<div className="locale">
	    		<a className="locale-link" href="/">United States</a>
	    	</div>
	    	<div className="legal">
	    		<div className="copyright">Copyright © 2025 Apple Inc. All rights reserved.</div>
	    		<ul className="links">
	    			<li className="links-item"><a className="link" href="/legal/privacy/" data-analytics-title="privacy policy">Privacy Policy</a></li>
	    			<li className="links-item"><a className="link" href="/legal/internet-services/terms/site.html" data-analytics-title="terms of use">Terms of Use</a></li>
	    			<li className="links-item"><a className="link" href="/us/shop/goto/help/sales_refunds" data-analytics-title="sales and refunds">Sales and Refunds</a></li>
	    			<li className="links-item"><a className="link" href="/legal/" data-analytics-title="legal">Legal</a></li>
	    			<li className="links-item"><a className="link" href="/sitemap/" data-analytics-title="site map">Site Map</a></li>
	    		</ul>
	    	</div>
	    </div>
    </>
  );
}

export default Footer;