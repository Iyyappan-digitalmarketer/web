
import React from 'react';
import '../Styles/Team.css';

import team01 from '../../images/team-01.png';
import team02 from '../../images/team-02.png';
import team03 from '../../images/team-03.png';
import team04 from '../../images/team-04.png';

const teamMembers = [
    {
        imgUrl : team01,
        name:'Iyyappan',
        position: 'Digital Marketer'
    },
    {
        imgUrl : team02,
        name:'Harini',
        position: 'Digital Marketer'
    },
    {
        imgUrl : team03,
        name:'Iyyappan',
        position: 'Digital Marketer'
    },
    {
        imgUrl : team04,
        name:'Iyyappan',
        position: 'Digital Marketer'
    },
]

const Team = () => {
  return (
    <section className='our_team' >
        <div className="container">
            <div className="team_content">
                <h6 className="subtitle">Our Team</h6>
                <h2>Meet With <span className="highlight"> Our Team </span> </h2>
            </div>
            <div className="team_wrapper">
                {
                    teamMembers.map((item,index)=>(
                        <div className="team_item" key={index}>
                    <div className="team_img">
                        <img src= {item.imgUrl} alt="" />
                    </div>
                    <div className="team_details">
                        <h4>{item.name}</h4>
                        <div className="description">{item.position}</div>
                        <div className="team_member-social">
                            <span>
                                <i className="ri-linkedin-line"></i>
                            </span>
                            <span>
                                <i className="ri-twitter-line"></i>
                            </span>
                        </div>

                    </div>
                </div>
                    ))
                }

            </div>

        </div>

    </section>
  );
};

export default Team;