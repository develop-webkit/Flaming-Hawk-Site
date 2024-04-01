import {SimpleSliderSellerFunc} from "./SlickSliders";

export default function Seller(){
    return(
        <section className="seller-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="seller-heading">
                            <h1>
                                Best Sellers
                            </h1>
                            <p>Browse the best of our top-rated carbon parts.</p>
                        </div>
                    </div>
                </div>
                <div className="row slick-row-seller">
                    <div className="col-12">
                        <div className="seller-slick">
                            <SimpleSliderSellerFunc />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}