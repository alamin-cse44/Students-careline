import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const EventsShow = ({ event }) => {
    const { title, description, img, location, time } = event;
    const loc = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const watch = <FontAwesomeIcon icon={faClock} />
    return (
        <div>
            <div className="card mb-3 shadow-lg p-3" style={{border:'none'}} >
            <div className="row g-0">
                <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                            <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{description}</p>
                        </div>
                        <hr />
                        <div>
                            <span className='text-primary'>{loc}</span>
                            <span className='ms-2 fw-bold'>{ location }</span>
                            <span className='ms-5 text-primary'>{watch}</span>
                            <span className='ms-2 fw-bold'>{ time }</span>
                        </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default EventsShow;