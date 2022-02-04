import React from 'react';
import './Welcome.css'
import welcome_img from '../../../images/poster_bg.jpg';

const Welcome = () => {
    return (
        <div className='container' style={{marginTop:'110px'}}>
            <div className="px-4">
            <div className="row g-3" style={{alignItems:'center', justifyContent:"center"}}>
                <div className="col-md-6 col-lg-6">
                  <h1 className='fw-bold'> <span style={{color:'#bf080e'}}>Welcome to</span> Our EduVas
                            Education Platform</h1>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo suscipit omnis impedit culpa? Ratione voluptates iure vero porro nesciunt temporibus veritatis enim at tenetur aut. Excepturi est unde quos repellat, nemo labore recusandae, illo, aspernatur doloribus similique id velit molestiae fuga quibusdam quia? Illum pariatur blanditiis, perspiciatis beatae harum minus?</p>
                   <button className=' btn btn-warning text-dark px-5 py-3 welcome-btn' style={{border:'none', fontWeight:'bold', borderRadius:'5px'}}>READ MORE</button>     
                </div>
                    

                <div className="col-md-6 col-lg-6">
                        <img className='img-fluid' src={welcome_img} alt="" />
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Welcome;