
import React from 'react';
import '../Styles/About.css';
import aboutImg from '../../images/about-us.jpg';


const chooseData = [
  {
    icon: 'ri-wifi-line',
    title:'First working process',
    desc:'We partner with startups, SMEs, and established brands to build a powerful online presence and unlock long-term growth. Our mission is simple: turn digital potential into measurable success.'
  },
  {
    icon: 'ri-team-line',
    title:'Dedicated team',
    desc:'We partner with startups, SMEs, and established brands to build a powerful online presence and unlock long-term growth. Our mission is simple: turn digital potential into measurable success.'
  },
  {
    icon: 'ri-customer-service-2-line',
    title:'24/7 Hr support',
    desc:'We partner with startups, SMEs, and established brands to build a powerful online presence and unlock long-term growth. Our mission is simple: turn digital potential into measurable success.'
  },

]

const About = () => {
  return ( 
  <section id='about'>
        <div className="container">
            <div className="about_wrapper">
                <div className="about_content">
                    <h6 className="subtitle">Why Choose Us</h6>
                    <h2>Specialist in aviding clients</h2>
                    <h2 className='highlight'>finacial challenges</h2> 
                    
                     <p className="description about_content-desc">we help brands grow smarter, faster, and stronger in the digital world.
                      Our team blends creativity, strategy, and technology to deliver marketing solutions that attract, engage, and convert.
                      With expertise in SEO, social media marketing, paid ads, branding, and web development, we craft data-driven campaigns that deliver real business results—not just clicks.
                    </p>
                  
                   
                    <div className='choose_item-wrapper'>
                      {
                        chooseData.map((item,index) => (
                          <div className="choose_us-item" key={index}>
                      <span className="choose_us-icon">
                        <i class = {item.icon}></i>
                      </span>
                      <div>
                           <h4 className="choose_us-title">
                        {item.title}
                        </h4>
                       <p className="description">
                        {item.desc}
                        
                       </p>

                      </div>
                   
                    </div>
                        ))
                      }
                    </div>
                </div>
                <div className='about_img'>
                  <img src= {aboutImg} alt="" />
                </div>
            </div>
        </div>
    </section>
    );

};

export default About;