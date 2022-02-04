import { faEnvelopeOpen, faGraduationCap, faMap, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const cap = <FontAwesomeIcon icon={faGraduationCap} />
    const mobile = <FontAwesomeIcon icon={faPhone} />
    const email = <FontAwesomeIcon icon={faEnvelopeOpen} />
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} />
    return (
        <div style={{marginTop:'120px'}} className='bg-dark'>
            <div className='container p-5'>
                <div className="row text-light">
                    <div className="col-md-6 col-lg-4" >
                        <div style={{width:'90%'}}>
                        <div className='text-center'><span style={{fontSize:'40px'}} className='fw-bold text-primary'>{ cap }</span></div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 my-5">
                        <h3>Important Links</h3>
                        <div className='mt-3'>
                        <Link to='/' style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                         <p>Home</p>
                        </Link>
                        <Link to='teams' style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                         <p>Teams</p>
                        </Link>
                        <Link  style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                         <p>About</p>
                        </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-5">
                        <h4>Contact Info</h4>
                        <div className='mt-3'>
                            <span className='text-danger fs-5 me-3'>{ mobile }</span>
                            <span>+880 1643530690</span>
                        </div>
                        <div className='mt-3'>
                            <span className='text-danger fs-5 me-3'>{ email }</span>
                            <span>alamincse44@gmail.com</span>
                        </div>
                        <div className='mt-3'>
                            <span className='text-danger fs-5 me-3'>{ location }</span>
                            <span>Dhaka, Bangladesh</span>
                        </div>
                    </div>
              </div>
            </div>
        </div>
    );
};

export default Footer;