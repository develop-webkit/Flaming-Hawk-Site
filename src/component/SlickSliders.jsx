import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SimpleSliderHeroFun = function SimpleSliderHero() {
  const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        className: 'untern-slider4x',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive:
        [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
  };
  return (
    <Slider {...settings}>
        <div>
            <div className="hero-slick-content-bg hero-slick-content-bg-start">
                <span>Carbon Fiber Parts</span>
                <h1>Your Dream Build <br/> Begins Here</h1>
                <p>Experience the fusion of strength, style, and performance.</p>
                <a href="google.com">
                    <button type="button" className="d-btn">
                        Shop Now
                    </button>
                </a>
            </div>
        </div>
        <div>
            <div className="hero-slick-content-bg hero-slick-content-bg-mid">
                <span>Custom Steering Wheels</span>
                <h1>Your Vision, Our <br/> Craft</h1>
                <p>Handcrafted with Japanese carbon, premium leather, and tailored for your driving
                    <br/> style.
                </p>
                <a href="google.com">
                    <button type="button" className="d-btn">
                        Build Yours
                    </button>
                </a>
            </div>
        </div>
        <div>
            <div className="hero-slick-content-bg">
                <span>Spoilers</span>
                <h1>Aesthetics Meet <br/> Performance</h1>
                <p>Blending lightweight design with advanced aerodynamics.</p>
                <a href="google.com">
                    <button type="button" className="d-btn">
                        Shop Now
                    </button>
                </a>
            </div>    
        </div>
    </Slider>
  );
}
export const SimpleSliderSlider = function SimpleSliderSlider() {
    const settings = {
          dots: true,
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive:
          [
              {
                  breakpoint: 992,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                  }
              },
              {
                  breakpoint: 767,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                  }
              }
          ]
    };
    return (
      <Slider {...settings}>
          <div>
              <div className="hero-slick-content-bg hero-slick-content-bg-start">
                  <span>Carbon Fiber Parts</span>
                  <h1>Your Dream Build <br/> Begins Here</h1>
                  <p>Experience the fusion of strength, style, and performance.</p>
                  <a href="google.com">
                      <button type="button" className="d-btn">
                          Shop Now
                      </button>
                  </a>
              </div>
          </div>
          <div>
              <div className="hero-slick-content-bg hero-slick-content-bg-mid">
                  <span>Custom Steering Wheels</span>
                  <h1>Your Vision, Our <br/> Craft</h1>
                  <p>Handcrafted with Japanese carbon, premium leather, and tailored for your driving
                      <br/> style.
                  </p>
                  <a href="google.com">
                      <button type="button" className="d-btn">
                          Build Yours
                      </button>
                  </a>
              </div>
          </div>
          <div>
              <div className="hero-slick-content-bg">
                  <span>Spoilers</span>
                  <h1>Aesthetics Meet <br/> Performance</h1>
                  <p>Blending lightweight design with advanced aerodynamics.</p>
                  <a href="google.com">
                      <button type="button" className="d-btn">
                          Shop Now
                      </button>
                  </a>
              </div>    
          </div>
      </Slider>
    );
  }
