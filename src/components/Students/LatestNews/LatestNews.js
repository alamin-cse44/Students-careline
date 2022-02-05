import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import blog1 from '../../../images/blog1.jpg';
import blog2 from '../../../images/blog2.jpg';
import blog3 from '../../../images/blog3.jpg';
import admin1 from '../../../images/admin1.jpg';
import admin2 from '../../../images/admin2.jpg';
import admin3 from '../../../images/admin3.jpg';
import Blog from '../Blog/Blog';

const blogs = [
    {
        id: 1,
        name: 'D.K Sayem',
        title: 'Our Next Convocation in March 2019',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by....',
        blog_img: blog1,
        love: '59',
        comment: '32',
        admin_img: admin1
    },
    {
        id: 2,
        name: 'S. Susmita',
        title: 'Women Education Scolarship 2019',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by....',
        blog_img: blog2,
        love: '32',
        comment: '85',
        admin_img: admin2
    },
    {
        id: 3,
        name: 'A.M Riaz',
        title: 'Graphic Design is a Key Profession',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by....',
        blog_img: blog3,
        love: '85',
        comment: '32',
        admin_img: admin3
    }
]

const LatestNews = () => {
    return (
        <div id='blog' style={{backgroundColor: '#f7f7f7'}}>
        <Container style={{marginTop:'120px'}}>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <div style={{textAlign:'center', justifyContent:'center'}}>
            <Row>
                <Col className='m-auto' xs={12} md={6}>
                        <h2 className='fw-bold mt-5'>Latest News</h2>
                       
                        
                        <div className='mt-2'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum temporibus aliquam perspiciatis soluta perferendis sint tempora, quisquam natus deserunt iste suscipit, est vel numquam! Cumque facilis vel in nostrum.</p>
                        </div>
                        <p></p>
                        <span className='p-1 rounded-circle' style={{border:'2px solid red', fontSize:'1px'}}></span>
                        <span className='p-1 rounded-circle ms-3 me-3' style={{border:'2px solid red', fontSize:'1px'}}></span>
                        <span className='p-1 rounded-circle' style={{border:'2px solid red', fontSize:'1px'}}></span>
                </Col>
            </Row>
            </div>


            {/* blog content */}
            <div style={{marginTop:'50px'}}>
                <div className="">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        blogs.map(blog => <Blog
                        key={blog.id}    
                        blog={blog}
                        ></Blog>)
                    }
                </div>
                
              </div>
            </div>

        
            </Container>
            </div>
    );
};

export default LatestNews;