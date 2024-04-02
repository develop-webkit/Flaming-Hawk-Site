import arrival1 from "../assets/arrival1.webp";
import arrival2 from "../assets/arrival2.webp";
import arrival3 from "../assets/arrival3.webp";
import arrival4 from "../assets/arrival4.webp";
import arrival5 from "../assets/arrival5.webp";
import arrival6 from "../assets/arrival6.webp";
import arrival7 from "../assets/arrival7.webp";
import arrival8 from "../assets/arrival8.webp";

export default function Arrival() {
    return (
        <section className="arrival-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 avail-col-12 d-flex align-items-center justify-content-between">
                        <div className="seller-heading">
                            <h1>
                                New Arrivals
                            </h1>
                            <p>Shop for the best selection of carbon fiber parts</p>
                        </div>
                        <a href="Google.com">
                            Shop New Arrivals
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <title>Icon</title>
                                <path d="M1 1L5 5L1 9" stroke="#3f72e5" strokeWidth="1.2" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="techno-slide">
                            <a title="footer-icon" className="wheels-img" href="Google.com">
                                <img className="wheel-one" src={arrival2} alt=""/>
                                <img className="wheel-two" src={arrival1} alt=""/>
                            </a>
                            <div className="price-heading">
                                <a href="Google.com">
                                    Mercedes Benz [2022+] Custom Steering Wheel
                                </a>
                                <span>
                                    <ins className="span-ins">
                                        Rs.283,100.00
                                    </ins>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="techno-slide">
                            <span className="badge-sale">Save 13%
                            </span>
                            <a title="footer-icon" className="wheels-img" href="Google.com">
                                <img className="wheel-one" src={arrival4} alt=""/>
                                <img className="wheel-two" src={arrival3} alt=""/>
                            </a>
                            <div className="price-heading">
                                <a href="Google.com">
                                    VR Style Carbon Fiber Spoiler - BMW M3 G80 & M4 G82/G83
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
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="techno-slide">
                            <a title="footer-icon" className="wheels-img" href="Google.com">
                                <img className="wheel-one" src={arrival6} alt=""/>
                                <img className="wheel-two" src={arrival5} alt=""/>
                            </a>
                            <div className="price-heading">
                                <a href="Google.com">
                                    ADRO Style Swan Neck Carbon Fiber Spoiler - BMW M3 G80 & M4 G82/G83
                                </a>
                                <span>
                                    <ins className="span-ins">
                                        Rs.283,100.00
                                    </ins>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="techno-slide">
                            <a title="footer-icon" className="wheels-img" href="Google.com">
                                <img className="wheel-one" src={arrival8} alt=""/>
                                <img className="wheel-two" src={arrival7} alt=""/>
                            </a>
                            <div className="price-heading">
                                <a href="Google.com">
                                    Carbon Fiber Door Handle/Side Vent - Corvette C8
                                </a>
                                <span>
                                    <ins className="span-ins">
                                        Rs.283,100.00
                                    </ins>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}