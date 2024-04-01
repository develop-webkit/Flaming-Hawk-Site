import {SimpleSliderRatingFunc} from "./SlickSliders";

export default function Rating() {
    return (
        <section className="rating-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="seller-heading">
                            <h1>
                                Loved by Customers
                            </h1>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="love-slick">
                            <div className="untern-slider3x">
                                <SimpleSliderRatingFunc />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}