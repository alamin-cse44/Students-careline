import React from 'react';

const Comments = ({ comment }) => {
    const { name, description, admin_img } = comment;
    // console.log(comment);
    return (
        <div>
            <div className="col bg-light" style={{}}>
                <div className="card h-100 m-4 shadow" style={{border:'none', textAlign:'center', justifyContent:'center'}}>
                <div className="card-body p-5">
                        <p className="card-text">{description}</p>
                        <h5 className="card-title">{name}</h5>
                        <div className='mt-5'>
                        <img src={admin_img} className="card-img-top m-auto rounded-circle" style={{width:'25%'}} alt="..."/>
                        </div>
                </div> 
                </div>
            </div>
            </div>
    );
};

export default Comments;