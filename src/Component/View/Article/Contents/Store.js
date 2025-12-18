import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import mac from "../../../../Assets/store/mac.png";
import iPhone from "../../../../Assets/store/iphone.png";
import iPad from "../../../../Assets/store/ipad.png";
import Watch from "../../../../Assets/store/watch.png";
import Vision from "../../../../Assets/store/vision-pro.png";
import Airpods from "../../../../Assets/store/airpods.png";
import Airtags from "../../../../Assets/store/airtags.png";
import Appletv from "../../../../Assets/store/appletv.png";
import Homepod from "../../../../Assets/store/homepod.png";
import Accessories from "../../../../Assets/store/accessories.png";
import HolidayGiftcards from "../../../../Assets/store/holiday-giftcards.png";

const Store = () => {
  return (
    <>
      <div className="dd-container">
        <div className="dd-colors">
          <div className="dd-color dd-blue"></div>
          <div className="dd-color dd-orange"></div>
          <div className="dd-color dd-yellow-orange"></div>
          <div className="dd-color dd-blue-yellow"></div>
        </div>
      </div>

      <div className="store">
        <div className="container-fluid">
          <h2>
            <span>Store</span>
          </h2>
          <div className="grid">
            <div className="box">
              <figure>
                <img src={mac} alt="mac" />
              </figure>
              <p className="link">
                <NavLink to="/">mac</NavLink>
              </p>
            </div>
            <div className="box">
              <figure>
                <img src={iPhone} alt="iPhone" />
              </figure>
              <p className="link">
                <NavLink to="/">iPhone</NavLink>
              </p>
            </div>
            <div className="box">
              <figure>
                <img src={iPad} alt="iPad" />
              </figure>
              <p className="link">
                <NavLink to="/">iPad</NavLink>
              </p>
            </div>
            <div className="box">
              <figure>
                <img src={Watch} alt="Watch" />
              </figure>
              <p className="link">
                <NavLink to="/">Apple Watch</NavLink>
              </p>
            </div>
            <div className="box">
              <figure>
                <img src={Vision} alt="Vision" />
              </figure>
              <p className="link">
                <NavLink to="/">Apple Vision Pro</NavLink>
              </p>
            </div>
            <div className="box">
              <figure>
                <img src={Airpods} alt="Airpods" />
              </figure>
              <p className="link">
                <NavLink to="/">AirPods</NavLink>
              </p>
            </div>
            <div className="box">
              <figure>
                <img src={Airtags} alt="Airtags" />
              </figure>
              <p className="link">
                <NavLink to="/">AirTag</NavLink>
              </p>
            </div>
            <div className="box">
              <figure>
                <img src={Appletv} alt="Appletv" />
              </figure>
              <p className="link">
                <NavLink to="/">Apple TV 4K</NavLink>
              </p>
            </div>
            <div className="box">
              <figure>
                <img src={Homepod} alt="Homepod" />
              </figure>
              <p className="link">
                <NavLink to="/">HomePod</NavLink>
              </p>
            </div>
            <div className="box">
              <figure>
                <img src={Accessories} alt="Accessories" />
              </figure>
              <p className="link">
                <NavLink to="/">Accessories</NavLink>
              </p>
            </div>
            <div className="box">
              <figure>
                <img src={HolidayGiftcards} alt="HolidayGiftcards" />
              </figure>
              <p className="link">
                <NavLink to="/">Apple Gift Card</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Store;
