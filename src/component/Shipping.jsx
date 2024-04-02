import ship1 from "../assets/ship1.png";
import ship2 from "../assets/ship2.png";
import ship3 from "../assets/ship3.png";
import ship4 from "../assets/ship4.png";

export default function Shipping() {
    return (
        <section className="shipping-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="ship-content">
                            <img src={ship1} alt=""/>
                            <h6>Free Shipping</h6>
                            <p>On all orders within the United States.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="ship-content">
                            <img src={ship2} alt=""/>
                            <h6>Secure Payment</h6>
                            <p>Our website uses the latest encryption technology to protect your data.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="ship-content">
                            <img src={ship3} alt=""/>
                            <h6>Exceptional Customer Service</h6>
                            <p>We're committed to your satisfaction. Available weekdays 9 AM - 5 PM EST.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="ship-content">
                            <img src={ship4} alt=""/>
                            <h6>Financing Available</h6>
                            <p>Order now, pay later.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}