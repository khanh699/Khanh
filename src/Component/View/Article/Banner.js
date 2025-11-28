import 'bootstrap/dist/css/bootstrap.min.css';
import video from "../../../Assets/large.mp4"
// import { IoIosSearch, IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="image-wrapper">
          <video autoPlay="autoplay" muted loop="">
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="banner-headline">
	      	<h1 className="section-headline">The Apple Store Shopping Event <small>Get an Apple Gift Card with an eligible purchase.<sup>1</sup> Starts 11.28.</small></h1>
          <button type="button" className="btn btn-primary">Shop</button>
	      </div>
      </div>
    </>
  );
}

export default Banner;

