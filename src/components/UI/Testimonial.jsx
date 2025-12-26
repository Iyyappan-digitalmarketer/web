
import React from 'react';
import '../Styles/Testimonial.css'
import Slider from 'react-slick';
import ava01 from '../../images/ava-1.jpg';
import ava02 from '../../images/ava-2.jpg';
import ava03 from '../../images/ava-3.jpg';


const Testimonial = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };

  return (
    <section>
        <div className="container">
            <div className="slider_content-top">
                <h6 className="subtitle">Testimonials</h6>
                <h2>Trusted by more <span className=" highlight">5,000 customer</span></h2> 
            </div>
                <div className="slider_wrapper">

                    <Slider {...settings}>
                        <div className="slider_item">
                            <p className="description">
                                Had a good experience in working with their team for my needs in digital marketing services. Their staffs were professional and client relationship was good. Worth the money we spend.Had a good experience in working with their team for my needs in digital marketing services. Their staffs were professional and client relationship was good. Worth the money we spend.
                            </p>
                            <div className="customer_details">
                                <div className="customer img">
                                    <img src= {ava01} alt="" />
                                </div>
                                <div>
                                    <h5 className="customer_name">Hari</h5>
                                    <p className="description">CEO</p>
                                </div>
                            </div>
                        </div>
                        <div className="slider_item">
                            <p className="description">
                                Had a good experience in working with their team for my needs in digital marketing services. Their staffs were professional and client relationship was good. Worth the money we spend.Had a good experience in working with their team for my needs in digital marketing services. Their staffs were professional and client relationship was good. Worth the money we spend.

                            </p>
                            <div className="customer_details">
                                <div className="customer img">
                                    <img src= {ava02} alt="" />
                                </div>
                                <div>
                                    <h5 className="customer_name">Hari</h5>
                                    <p className="description">CEO</p>
                                </div>
                            </div>
                        </div>
                        <div className="slider_item">
                            <p className="description">
                                Had a good experience in working with their team for my needs in digital marketing services. Their staffs were professional and client relationship was good. Worth the money we spend.Had a good experience in working with their team for my needs in digital marketing services. Their staffs were professional and client relationship was good. Worth the money we spend.
                            </p>
                            <div className="customer_details">
                                <div className="customer img">
                                    <img src= {ava03} alt="" />
                                </div>
                                <div>
                                    <h5 className="customer_name">Hari</h5>
                                    <p className="description">CEO</p>
                                </div>
                            </div>
                        </div>
                        
                    </Slider>


                </div>
            </div>
        
    </section>
  );
};

export default Testimonial;