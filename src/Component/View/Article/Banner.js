// import { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// const Banner = () => {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

// window.addEventListener('resize', () => {
//     const width = window.innerWidth;
//     const myElement = document.getElementById('my-element');
 
//     if (width < 768) {
//         myElement.classList.add('mobile-style');
//         myElement.classList.remove('desktop-style');
//     } else {
//         myElement.classList.remove('mobile-style');
//         myElement.classList.add('desktop-style');
//     }
// });

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <ExampleCarouselImage text="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Banner;

import 'bootstrap/dist/css/bootstrap.min.css';
import video from "../../../Assets/large.mp4"
// import { IoIosSearch, IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  return (
    <>
      <div className="image-wrapper">
        <video autoPlay="autoplay" muted loop="">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      {/* <video id="ase-2025-video" data-inline-media="" muted="" preload="none" src={video} playsinline=""></video> */}
      <div className="banner-headline">
	    	<h1 className="section-headline">The Apple Store Shopping Event <small>Get an Apple Gift Card with an eligible purchase.<sup>1</sup> Starts 11.28.</small></h1>
        <button type="button" className="btn btn-primary">Shop</button>
	    </div>
      {/* <div className="banner-headline">
	    	<h1 className="section-headline">The page you’re looking<br/> for can’t be found.</h1>
	    	<div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label htmlFor="floatingInput">Search apple.com</label>
          <span className="search"><IoIosSearch /></span>
        </div>
	    	<div className="cta-sitemap">
	    		<a href="/sitemap/" data-analytics-region="learn more" className="more"><span className="icon-shim">Or see our site map</span><IoIosArrowForward /></a> </div>
	    </div> */}
    </>
  );
}

export default Banner;

