import { faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CourseShow = ({course}) => {
    const { img, title, description, name, admin_img } = course;
    const loves = <FontAwesomeIcon icon={faHeart} />
    const comments = <FontAwesomeIcon icon={faCommentDots} />
    return (
        <div>
            <div className="col bg-light" style={{height:'',}}>
                <div className="card h-100 m-2 shadow-cls" style={{border:'none'}}>
                <img src={img} className="card-img-top img-fluid" style={{}} alt="..."/>
                <div className="card-body p-3 text-center">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{ description }</p>
                    </div>
                    <hr></hr>
                <div className="p-2" style={{border:'none'}}>
                        <div className='row' style={{}}>
                            <div className='d-flex'>
                            <div className='col d-flex'>
                            <img  className='rounded-circle img-fluid' src={admin_img} alt="" />
                           <span className='fw-bold ms-3 mt-3'>{name}</span>
                            </div>
                            <div className='me-2'>
                                <p className='fw-bold text-danger'>Lession 5</p>
                                <p className='fw-bold text-danger'>Session 5/h</p>
                            </div>
                        </div>
                        </div>
                        
                </div>
                </div>
            </div>
        </div>
    );
};

export default CourseShow;