
import React from "react";
import '../UI/Counter.css';

const counterData = [
    {
        number: 200,
        text:'clients'
    },
    {
        number: 350,
        text:'Runing Projects'
    },
    {
        number: 800,
        text:'Projects Completed'
    },
]

const Counter = () => {
    return <section className="counter" id="projects">
        <div className="container">
            <div className="counter">
            <div className="counter_wrapper">

                {
                    counterData.map((item,index)=>(
                         <div className="counter_item" key={index}>
                            <h3 className="counter_number">{item.number}+</h3>
                            <h4 className="counter_title">{item.text}</h4>
                        </div>

                    ))
                }



               
            </div>
        </div>
            
        </div>
        
    </section>
}

export default Counter