import make1 from "../assets/make1.png";
import make2 from "../assets/make2.png";
import make3 from "../assets/make3.webp";
import make4 from "../assets/make4.png";
import make5 from "../assets/make5.png";
import make6 from "../assets/make6.png";

export default function CarMake() {
    return (
        <section className="carmake-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="seller-heading">
                            <h1>
                                Shop by car make
                            </h1>
                            <p>All the parts for your car in one place</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="make-tags">
                            <a title="footer-icon" href="google.com">
                                <img src={make1} alt=""/>
                            </a>
                            <a title="footer-icon" href="google.com">
                                <img src={make2} alt=""/>
                            </a>
                            <a title="footer-icon" href="google.com">
                                <img src={make3} alt=""/>
                            </a>
                            <a title="footer-icon" href="google.com">
                                <img src={make4} alt=""/>
                            </a>
                            <a title="footer-icon" href="google.com">
                                <img src={make5} alt=""/>
                            </a>
                            <a title="footer-icon" href="google.com">
                                <img src={make6} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}