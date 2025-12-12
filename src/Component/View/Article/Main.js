import 'bootstrap/dist/css/bootstrap.min.css';
import Apple from '../../../Assets/apple-logo.png';
import iPhone17PC from '../../../Assets/iphone-17-pro.jpg';
import iPhoneAir from '../../../Assets/iphone-air.jpg';
import Promo from '../../../Assets/promo-holiday.jpg';
import AirpodsPro from '../../../Assets/airpods-pro.jpg';
import iPadAir from '../../../Assets/ipad-air.jpg';
import AppleWatch from '../../../Assets/apple-watch-series-11.jpg';
import Carrier from '../../../Assets/carrier.jpg';
import AppleTradeIn from '../../../Assets/iphone-trade-in.jpg';

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="iphone17">
          <div className="image-wrapper">
            <img src={iPhone17PC} alt="iPhone 17 Pro"/>
          </div>
          <div className="main-headline">
            <h2 className="mb-3">iPhone 17 Pro <small>All out Pro.</small></h2>
            <div className="button">
			    		<a className="btn btn-primary" href="/" target="_self">Learn more</a>
			    	  <a className="btn btn-outline-primary" href="/" target="_self">Buy</a>
			    	</div>
          </div>
        </div>
        <div className="iphone-air">
          <div className="image-wrapper">
            <img src={iPhoneAir} alt="iPhone Air"/>
          </div>
          <div className="main-headline">
            <h2 className="mb-3">iPhone Air <small>The thinnest iPhone ever.<br/> With the power of pro inside.</small></h2>
            <div className="button">
			    		<a className="btn btn-primary" href="/" target="_self">Learn more</a>
			    	  <a className="btn btn-outline-primary" href="/" target="_self">Buy</a>
			    	</div>
          </div>
        </div>
        <div className="box promo-holiday">
          <div className="image-wrapper">
            <img src={Promo} alt="Apple"/>
          </div>
          <div className="main-headline">
            <h3 className="mb-3">Give something special. <small>Find what they’ve been waiting for all year.</small></h3>
            <div className="button">
			    		<a className="btn btn-primary" href="/" target="_self">Learn more</a>
			    	  <a className="btn btn-outline-primary" href="/" target="_self">Buy</a>
			    	</div>
          </div>
        </div>
        <div className="box airpods-pro">
          <div className="image-wrapper">
            <img src={AirpodsPro} alt="Apple"/>
          </div>
          <div className="main-headline">
            <h3 className="mb-3">AirPods Pro 3 <small>The world’s best in-ear<br/> Active Noise Cancellation.</small></h3>
            <div className="button">
			    		<a className="btn btn-primary" href="/" target="_self">Learn more</a>
			    	  <a className="btn btn-outline-primary" href="/" target="_self">Buy</a>
			    	</div>
          </div>
        </div>
        <div className="box ipad-air">
          <div className="image-wrapper">
            <img src={iPadAir} alt="Apple"/>
          </div>
          <div className="main-headline">
            <h3 className="mb-3">iPad Air <small>Now supercharged by the M3 chip.</small></h3>
            <div className="button">
			    		<a className="btn btn-primary" href="/" target="_self">Learn more</a>
			    	  <a className="btn btn-outline-primary" href="/" target="_self">Buy</a>
			    	</div>
          </div>
        </div>
        <div className="box apple-watch">
          <div className="image-wrapper">
            <img src={AppleWatch} alt="Apple"/>
          </div>
          <div className="main-headline">
            <h3 className="mb-3"><img src={Apple} alt="Apple" /> Watch Series 11 <small>The ultimate way to watch your health.</small></h3>
            <div className="button">
			    		<a className="btn btn-primary" href="/" target="_self">Learn more</a>
			    	  <a className="btn btn-outline-primary" href="/" target="_self">Buy</a>
			    	</div>
          </div>
        </div>
        <div className="box carrier">
          <div className="image-wrapper">
            <img src={Carrier} alt="Apple"/>
          </div>
          <div className="main-headline">
            <h3 className="mb-3">Any condition<br/> carrier deals are here. <small>Select carriers accept eligible trade-in devices<br className="br"/> in any condition. Other offers available.<sup>2</sup></small></h3>
            <div className="button">
			    		<a className="btn btn-primary" href="/" target="_self">Find your deal</a>
			    	</div>
          </div>
        </div>
        <div className="box apple-trade-in">
          <div className="image-wrapper">
            <img src={AppleTradeIn} alt="Apple"/>
          </div>
          <div className="main-headline">
            <h3 className="mb-3"><img src={Apple} alt="Apple" /> Trade In <small>Get up to $180–$670<br/> in credit when you trade in<br/> iPhone 13 or higher.<sup>3</sup></small></h3>
            <div className="button">
			    		<a className="btn btn-primary" href="/" target="_self">Get your estimate</a>
			    	</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main;