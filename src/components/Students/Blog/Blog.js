import { faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Blog.css';


const Blog = ({ blog }) => {
    const { name, title, description, blog_img, love, comment, admin_img } = blog;
    const loves = <FontAwesomeIcon icon={faHeart} />
    const comments = <FontAwesomeIcon icon={faCommentDots} />
    return (
        <div>
            <div className="col bg-light" style={{height:'530px',}}>
                <div className="card h-100  shadow-cls" style={{border:'none'}}>
                <img src={blog_img} className="card-img-top img-fluid" style={{}} alt="..."/>
                <div className="card-body p-3">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{ description }</p>
                    </div>
                    <p className='px-5 text-danger'>Read more...</p>
                    <hr></hr>
                <div className="p-2" style={{border:'none'}}>
                        <img className='rounded-circle img-fluid' src={admin_img} alt="" />
                        <span className='fw-bold ms-3'>{name}</span>
                        <span className='ms-4 text-danger'>{loves}</span>
                        <span className='ms-3 fw-bold'>{ love }</span>
                        <span className='ms-4 text-primary'>{comments}</span>
                        <span className='ms-3 fw-bold'>{ comment }</span>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;