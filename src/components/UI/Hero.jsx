
import React from "react";
import "../Styles/hero.css";
import heroDarkImg from "../../images/hero-img.png";
import lightImg from '../../images/light-hero-bg.jpg';


const Hero = ({theme}) => {
    return( 
        <section className="hero_section" id="home">
            <div className="container">
                <div className="hero_wrapper">
                    <div className="hero_content">
                        <div >
                            <h2>We're Creating Prefect</h2>
                            <h2>Digital Products To</h2>                        
                            <h2 className="highlight" >Promote Your Brand</h2>
                        </div>
                        <p className="description">
                            Transform your online presence with smart, result-oriented marketing.
                            </p>
                            
                            <div className="hero_btns">
                                <button className="primary_btn">Get Started Now</button>
                                <button className="secondary_btn">Discover More</button>
                            </div>
                    </div>
                    <div className="hero_img">
                        <img src={theme === 'light-theme' ? lightImg : heroDarkImg} alt="hero-img"/>
                    </div>
                    
                </div>
            </div>
        </section>

    ) 
}
export default Hero;