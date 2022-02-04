import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='header'>
            {/* <Navigation></Navigation> */}
            <div className="text-box">
            <h1><span className='text-danger'>Education</span> can Change Your Life</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nemo voluptas nihil possimus, <br/> dolores, itaque expedita magnam quaerat repellat suscipit veritatis saepe?</p>
            <a href="#" className="hero-btn">Visit Us to know More</a>
        </div>
        </div>
        
    );
};

export default Banner;