import React from "react";
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./HomeBanner.css";

const HomeBanner = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section
      className="homeBannerSection"
      style={{
        backgroundImage: `linear-gradient(
      to right,
      rgba(26, 34, 41, 0.8),
      rgba(26, 34, 41, 0.4)
    ),
    url(${process.env.PUBLIC_URL + "/images/home_hero_banner.png"})`,
      }}
    >
      <div className="homeBannerWrapper container">
        <Slider {...settings}>
          <div className="homeBanner">
            <h3>Built for Precision</h3>
            <h1>Designed for Hunting</h1>
            <p>
              Take your marksmanship to the next level with ultra-light,
              strongly built rifle with a swagger look- lock & loaded for your
              next hunt.
            </p>
            <div>
              <Link to="/all-products" className="btn">
                <span>shop now</span>{" "}
                <img src="/icons/right_arrow.png" alt="Arrow" />
              </Link>
            </div>
          </div>
          <div className="homeBanner">
            <h3>Built for Precision</h3>
            <h1>Designed for Hunting</h1>
            <p>
              Take your marksmanship to the next level with ultra-light,
              strongly built rifle with a swagger look- lock & loaded for your
              next hunt.
            </p>
            <div>
            <Link to="/all-products" className="btn">
                <span>shop now</span>{" "}
                <img src="/icons/right_arrow.png" alt="Arrow" />
              </Link>
            </div>
          </div>
          <div className="homeBanner">
            <h3>Built for Precision</h3>
            <h1>Designed for Hunting</h1>
            <p>
              Take your marksmanship to the next level with ultra-light,
              strongly built rifle with a swagger look- lock & loaded for your
              next hunt.
            </p>
            <div>
            <Link to="/all-products" className="btn">
                <span>shop now</span>{" "}
                <img src="/icons/right_arrow.png" alt="Arrow" />
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeBanner;
