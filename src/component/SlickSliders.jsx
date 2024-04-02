import toyota1 from "../assets/toyota1.avif";
import toyota2 from "../assets/toyota2.avif";

import bmw1 from "../assets/bmw1.avif";
import bmw2 from "../assets/bmw2.avif";

import gtr1 from "../assets/gtr1.avif";
import gtr2 from "../assets/gtr2.avif";

import porsche1 from "../assets/porsche1.avif";
import porsche2 from "../assets/porsche2.avif";

import corvette1 from "../assets/corvette1.avif";
import corvette2 from "../assets/corvette2.avif";

import star from "../assets/star.png";

import owl1 from "../assets/owl1.png";
import owl2 from "../assets/owl2.png";
import owl3 from "../assets/owl3.png";



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
        slidesToShow: 5,
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
                        <img className="wheel-one" src={toyota2} alt=""/>
                        <img className="wheel-two" src={toyota1} alt=""/>
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
                        <img className="wheel-one" src={bmw1} alt=""/>
                        <img className="wheel-two" src={bmw2} alt=""/>
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
                        <img className="wheel-one" src={gtr2} alt=""/>
                        <img className="wheel-two" src={gtr1} alt=""/>
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
                        <img className="wheel-one" src={porsche2} alt=""/>
                        <img className="wheel-two" src={porsche1} alt=""/>
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
                        <img className="wheel-one" src={corvette2} alt=""/>
                        <img className="wheel-two" src={corvette1} alt=""/>
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
                        <img className="wheel-one" src={toyota1} alt=""/>
                        <img className="wheel-two" src={toyota2} alt=""/>
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
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        
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
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
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
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
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
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
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
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
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
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
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
        dots: false,
        arrows: false,
        infinite: true,
        className: 'untern-slider2x',
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        speed: 8000,
        pauseOnHover: false,
        cssEase: 'linear',
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
                    <img src={owl1} alt=""/>
                    <p>High-end Carbon Parts</p>
                </div>
            </div>
            <div>
                <div className="auto-scroll-content">
                    <img src={owl2} alt=""/>
                    <p>Exclusive offers</p>
                </div>
            </div>
            <div>
                <div className="auto-scroll-content">
                    <img src={owl3} alt=""/>
                    <p>Build your dream car</p>
                </div>
            </div>
        </Slider>
    );
}


