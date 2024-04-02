import shop1 from "../assets/shop1.avif";
import shop2 from "../assets/shop2.avif";
import shop3 from "../assets/shop3.avif";

export default function Shop(){
    return(
        <section className="shop-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="shop-col">
                            <div className="shop-content">
                                <h6>Up to 25% off on custom steering wheels</h6>
                                <a href="google.com">
                                    Shop Now
                                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                             <title>Pass</title>
                                        <path d="M1 1L5 5L1 9" stroke="#3f72e5" strokeWidth="1.2" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="shop-img">
                                <img src={shop1} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="shop-col">
                            <div className="shop-content">
                                <h6>Discover a wide selection of premium carbon parts</h6>
                                <a title="click me" href="google.com">
                                    Explore
                                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                             <title>Pass</title>
                                        <path d="M1 1L5 5L1 9" stroke="#3f72e5" strokeWidth="1.2" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="shop-img">
                                <img src={shop2} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="shop-col">
                            <div className="shop-content">
                                <h6>Enjoy a greater level of customization</h6>
                                <a href="google.com">
                                    Explore
                                    <svg width="6" height="10" viewBox="0 0 6 10" title="icon" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                             <title>Pass</title>
                                        <path d="M1 1L5 5L1 9" stroke="#3f72e5" strokeWidth="1.2" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="shop-img">
                                <img src={shop3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}