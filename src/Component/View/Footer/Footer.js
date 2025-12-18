import { NavLink } from "react-router-dom";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	
  return (
    <>
      <div className="ac-gf-footer">
	    	<div className="shop">
	    		More ways to shop: <NavLink to="/"><ins>Find an Apple Store</ins></NavLink> or <NavLink to="/"><ins>other retailer</ins></NavLink> near you. <span className="nowrap">Or call <NavLink to="tel:1-800-692-7753"><ins>1-800-MY-APPLE</ins></NavLink> (1-800-692-7753).</span>
	    	</div>
	    	<div className="locale">
	    		<NavLink className="locale-link" to="/">United States</NavLink>
	    	</div>
	    	<div className="legal">
	    		<div className="copyright">Copyright © {currentYear} Apple Inc. All rights reserved.</div>
	    		<ul className="links">
	    			<li className="links-item"><NavLink className="link" to="/" data-analytics-title="privacy policy">Privacy Policy</NavLink></li>
	    			<li className="links-item"><NavLink className="link" to="/" data-analytics-title="terms of use">Terms of Use</NavLink></li>
	    			<li className="links-item"><NavLink className="link" to="/" data-analytics-title="sales and refunds">Sales and Refunds</NavLink></li>
	    			<li className="links-item"><NavLink className="link" to="/" data-analytics-title="legal">Legal</NavLink></li>
	    			<li className="links-item"><NavLink className="link" to="/" data-analytics-title="site map">Site Map</NavLink></li>
	    		</ul>
	    	</div>
	    </div>
    </>
  );
}

export default Footer;