import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ShowTeams.css';

const ShowTeams = ({ professor }) => {
    const { name, designation, img } = professor;
    // const instagram = <FontAwesomeIcon icon={fa} />
    return (
        <>
        <div>
            <div className="col bg-light" >
                <div className="card h-100 prof" style={{border:'none'}}>
                        <div className="hover15 column">
  
                        <div className='text-center'>
                                <figure>
                                    <img className='img-fluid' src={img} /> 
                                </figure>
                                <div className='text-center'>
                                <h5 className='fw-bold'>{name}</h5>
                                    <p>{designation}</p>
                                    <span><i className="fab fs-1 fw-bold fa-facebook-square"></i></span>
                            </div>
                        </div>
                        
                        </div>
                </div>
            </div>

            </div>
            
            </>
    );
};

export default ShowTeams;