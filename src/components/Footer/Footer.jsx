
import React from 'react';
import './Footer.css';

const quickLinks01 = [
    {
        path: '#',
        display: 'Marketing',
    },
    {
        path: '#',
        display: 'Analytics',
    },
    {
        path: '#',
        display: 'Commerce',
    },
]
const quickLinks02 = [
    {
        path: '#',
        display: 'Pricing',
    },
    {
        path: '#',
        display: 'Documentation',
    },
    {
        path: '#',
        display: 'Guides',
    },
]

const quickLinks03 = [
    {
        path: '#about',
        display: 'About',
    },
    {
        path: '#',
        display: 'Job',
    },
    {
        path: '#blog',
        display: 'Blog',
    },
]

const Footer = () => {

    const year = new Date ().getFullYear()

  return (
    <footer className="footer">
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_logo">
                    <h2>Iyyappan</h2>
                    <p className="description">Grow with us</p>
                    <p className="small_text description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea corrupti nihil facere quas temporibus. Fugiat, incidunt? Vitae nisi temporibus quisquam.

                    </p>
                </div>
                <div className="footer_quick-links">
                    <h3 className="quick_links-title">Solution</h3>
                    <ul className="quick_links">
                        {
                            quickLinks01.map((item, index)=>(
                                <li className="quick_link-item" key={index} >
                                    <a href= {item.path} > {item.display} </a></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="footer_quick-links">
                    <h3 className="quick_links-title">Support</h3>
                    <ul className="quick_links">
                        {
                            quickLinks02.map((item, index)=>(
                                <li className="quick_link-item" key={index} >
                                    <a href= {item.path} > {item.display} </a></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="footer_quick-links">
                    <h3 className="quick_links-title">Company</h3>
                    <ul className="quick_links">
                        {
                            quickLinks03.map((item, index)=>(
                                <li className="quick_link-item" key={index} >
                                    <a href= {item.path} > {item.display} </a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <p className="copyright">Copyright {year}, developed by Iyyappan. 
                All rights reserved.{""}
            </p>
        </div>
    </footer>

  );
};

export default Footer;