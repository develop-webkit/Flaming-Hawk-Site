import {SimpleSliderScrollFunc} from "./SlickSliders";

export default function Scroll() {
    return (
        <section className="auto-scroll-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="auto-scroll-col">
                            <div className="untern-slider2x">
                                <SimpleSliderScrollFunc />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}