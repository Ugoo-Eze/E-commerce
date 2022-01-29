import "../styles/Banner.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="banner">
      {/* <img src="https://ng.jumia.is/cms/8-18/jumia-food/designs/jprime.jpg"
                    alt="banner"
          /> */}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            src="https://ng.jumia.is/cms/8-18/jumia-food/designs/MS-660x330.gif"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://blog.jumia.com.ng/wp-content/uploads/2015/08/Money-banner.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i1.wp.com/blog.jumia.com.ng/wp-content/uploads/2015/02/blog-cover-market-place.png"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
