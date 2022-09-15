import React from "react";
import "../../styles/testimonials.css";

import Slider from "react-slick";

import avatar1 from "../../images/ava-1.jpg";
import avatar2 from "../../images/ava-2.jpg";
import avatar3 from "../../images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            Trusted by more than{" "}
            <span className="highlight">5,000 customers</span>
          </h2>
        </div>

        <div className="slider__wrapper">
          <Slider {...settings}>
            {/* slide 1 */}
            <div className="slider__item">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                expedita, in laudantium quam ipsa libero ad, ullam temporibus
                nisi accusantium dolorum adipisci, ut esse consequuntur. Officia
                fugit a nobis eos assumenda eaque deserunt asperiores sed
                minima, recusandae molestias, vero temporibus!
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={avatar1} alt="avatar" />
                </div>

                <div>
                  <h5 className="customer__name">George Bush</h5>
                  <p className="description">CEO, Workcreation</p>
                </div>
              </div>
            </div>

            {/* slide 2 */}
            <div className="slider__item">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                expedita, in laudantium quam ipsa libero ad, ullam temporibus
                nisi accusantium dolorum adipisci, ut esse consequuntur. Officia
                fugit a nobis eos assumenda eaque deserunt asperiores sed
                minima, recusandae molestias, vero temporibus!
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={avatar2} alt="avatar" />
                </div>

                <div>
                  <h5 className="customer__name">Hillary Clinton</h5>
                  <p className="description">Product Desiner</p>
                </div>
              </div>
            </div>

            {/* slide 3 */}
            <div className="slider__item">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                expedita, in laudantium quam ipsa libero ad, ullam temporibus
                nisi accusantium dolorum adipisci, ut esse consequuntur. Officia
                fugit a nobis eos assumenda eaque deserunt asperiores sed
                minima, recusandae molestias, vero temporibus!
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={avatar3} alt="avatar" />
                </div>

                <div>
                  <h5 className="customer__name">Joe Biden</h5>
                  <p className="description">Software Developer</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
