
import Recat from 'react';
import '../Styles/Services.css';

const serviceData = [
  {
    icon :'ri-apps-line',
    title :'App Development',
    desc : 'We build fast, secure, and scalable mobile apps tailored to your business needs.From concept to launch, we deliver seamless user experiences that drive results.'
  },
  {
    icon :'ri-code-s-slash-line',
    title :'Web Design',
    desc: 'We build fast, secure, and scalable mobile apps tailored to your business needs.From concept to launch, we deliver seamless user experiences that drive results.'
  },
  {
    icon :'ri-landscape-line',
    title :'Graphics Design',
    desc: 'We build fast, secure, and scalable mobile apps tailored to your business needs.From concept to launch, we deliver seamless user experiences that drive results.'
  },
  {
    icon :'ri-rocket-line',
    title :'Digital Marketing',
    desc: 'We build fast, secure, and scalable mobile apps tailored to your business needs.From concept to launch, we deliver seamless user experiences that drive results.'
  },
]

const Services = () => {
  return (
    <section id='service'>
    <div className="container">
      <div className="service_top-content">
        <h6 className="subtitle">Our Service</h6>
        <h2>Save time managing your business with</h2>
        <h2 className='highlight'>Our best services</h2>
      </div>
      <div className="service_item-wrapper">
        {
          serviceData.map((item, index)=>(
            <div className="services_item" key={index}>
          <span className="service_icon"><i class={item.icon}></i> </span>
          <h3 className="service_title">{item.title}</h3>
          <p className="description"> {item.desc} </p>
        </div>
          ))
        }
      </div>

    </div>
  </section>

  )
};

export default Services