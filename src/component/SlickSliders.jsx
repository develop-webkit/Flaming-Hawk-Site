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

export const SimpleSliderSellerFunc = function SimpleSliderSeller() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        className: 'untern-slider1x',
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive:
            [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }
            ]
    };
    return (
        <Slider {...settings}>
            <div>
                <div className="techno-slide">
                    <span className="badge-sale">Save 23%
                    </span>
                    <a title="footer-icon" className="wheels-img" href="google.com">
                        <img className="wheel-one" src="./assets/images/toyota2.avif" alt=""/>
                        <img className="wheel-two" src="./assets/images/toyota1.avif" alt=""/>
                    </a>
                    <div className="price-heading">
                        <a href="google.com">
                            Toyota GR86 [2021+] Custom Steering Wheel
                        </a>
                        <span>
                            <del>
                                Rs.368,100.00
                            </del>
                            <ins>
                                Rs.283,100.00
                            </ins>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <div className="techno-slide">
                    <span className="badge-sale">Save 23%
                    </span>
                    <a title="footer-icon" className="wheels-img" href="google.com">
                        <img className="wheel-one" src="./assets/images/bmw1.avif" alt=""/>
                        <img className="wheel-two" src="./assets/images/bmw2.avif" alt=""/>
                    </a>
                    <div className="price-heading">
                        <a href="google.com">
                            BMW F-Chassis Custom Steering Wheel
                        </a>
                        <span>
                            <del>
                                Rs.368,100.00
                            </del>
                            <ins>
                                Rs.283,100.00
                            </ins>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <div className="techno-slide">
                    <span className="badge-sale">Save 23%
                    </span>
                    <a title="footer-icon" className="wheels-img" href="google.com">
                        <img className="wheel-one" src="./assets/images/gtr2.avif" alt=""/>
                        <img className="wheel-two" src="./assets/images/gtr1.avif" alt=""/>
                    </a>
                    <div className="price-heading">
                        <a href="google.com">
                            Nissan GTR [2017+] Custom Steering Wheel
                        </a>
                        <span>
                            <del>
                                Rs.368,100.00
                            </del>
                            <ins>
                                Rs.283,100.00
                            </ins>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <div className="techno-slide">
                    <a title="footer-icon" className="wheels-img" href="google.com">
                        <img className="wheel-one" src="./assets/images/porsche2.avif" alt=""/>
                        <img className="wheel-two" src="./assets/images/porsche1.avif" alt=""/>
                    </a>
                    <div className="price-heading">
                        <a href="google.com">
                            Porsche [2020+] Custom Steering Wheel
                        </a>
                        <span>
                            <ins className="span-ins">
                                Rs.283,100.00
                            </ins>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <div className="techno-slide">
                    <span className="badge-sale">Save 23%
                    </span>
                    <a title="footer-icon" className="wheels-img" href="google.com">
                        <img className="wheel-one" src="./assets/images/corvette2.avif" alt=""/>
                        <img className="wheel-two" src="./assets/images/corvette1.avif" alt=""/>
                    </a>
                    <div className="price-heading">
                        <a href="google.com">
                            Corvette C8 Custom Steering Wheel
                        </a>
                        <span>
                            <del>
                                Rs.368,100.00
                            </del>
                            <ins>
                                Rs.283,100.00
                            </ins>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <div className="techno-slide">
                    <span className="badge-sale">Save 23%
                    </span>
                    <a title="footer-icon" className="wheels-img" href="google.com">
                        <img className="wheel-one" src="./assets/images/toyota1.avif" alt=""/>
                        <img className="wheel-two" src="./assets/images/toyota2.avif" alt=""/>
                    </a>
                    <div className="price-heading">
                        <a href="google.com">
                            Toyota GR86 [2021+] Custom Steering Wheel
                        </a>
                        <span>
                            <del>
                                Rs.368,100.00
                            </del>
                            <ins>
                                Rs.283,100.00
                            </ins>
                        </span>
                    </div>
                </div>
            </div>
        </Slider>
    );
}


export const SimpleSliderRatingFunc = function SimpleSliderRating() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        className: 'untern-slider3x',
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive:
            [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }
            ]
    };
    return (
        <Slider {...settings}>
            <div>
                <div className="love-customer">
                    <div className="love-customer-content">
                        <span className="love-star">
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                        </span>
                        <h5>Toyota Supra Custom Steering Wheel</h5>
                        <p>The steering wheel turned out to be amazing. Highly recommend.</p>
                        <h6>Eyad K.</h6>
                    </div>
                </div>
            </div>
            <div>
                <div className="love-customer">
                    <div className="love-customer-content">
                        <span className="love-star">
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                        </span>
                        <h5>BMW 50th Anniversary Emblem</h5>
                        <p>Very nice emblem. Fits perfectly and came with it's 3m tape.</p>
                        <h6>Kyle B.</h6>
                    </div>
                </div>
            </div>
            <div>
                <div className="love-customer">
                    <div className="love-customer-content">
                        <span className="love-star">
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                        </span>
                        <h5>Ford Mustang Custom Steering Wheel</h5>
                        <p>They were nice, easy to deal with, helped me out until I got exactly what I
                            was looking for.</p>
                        <h6>Hasan A.</h6>
                    </div>
                </div>
            </div>
            <div>
                <div className="love-customer">
                    <div className="love-customer-content">
                        <span className="love-star">
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                        </span>
                        <h5>Nissan 370z Custom Steering Wheel</h5>
                        <p>10/10 quality and looks insane.</p>
                        <h6>John L.</h6>
                    </div>
                </div>
            </div>
            <div>
                <div className="love-customer">
                    <div className="love-customer-content">
                        <span className="love-star">
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                            <img src="./assets/images/star.png" alt=""/>
                        </span>
                        <h5>Toyota Supra Custom Steering Wheel</h5>
                        <p>The steering wheel turned out to be amazing. Highly recommend.</p>
                        <h6>Eyad K.</h6>
                    </div>
                </div>
            </div>
        </Slider>
    );
}

export const SimpleSliderScrollFunc = function SimpleSliderScroll() {
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
                <div className="auto-scroll-content">
                    <img src="./assets/images/owl1.png" alt=""/>
                    <p>High-end Carbon Parts</p>
                </div>
            </div>
            <div>
                <div className="auto-scroll-content">
                    <img src="./assets/images/owl2.png" alt=""/>
                    <p>Exclusive offers</p>
                </div>
            </div>
            <div>
                <div className="auto-scroll-content">
                    <img src="./assets/images/owl3.png" alt=""/>
                    <p>Build your dream car</p>
                </div>
            </div>
        </Slider>
    );
}

//export {SimpleSliderHeroFun,SimpleSliderSellerFunc}

