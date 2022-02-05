import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import course1 from '../../../images/course1.jpg';
import course2 from '../../../images/course2.jpg';
import course3 from '../../../images/course3.jpg';
import admin1 from '../../../images/admin1.jpg';
import admin2 from '../../../images/admin2.jpg';
import admin3 from '../../../images/admin3.jpg';
import CourseShow from "../CourseShow/CourseShow";

const courses = [
  {
      id: 1,
      title: 'Graphic Design',
      name: 'D.K Sayem',
      description: 'Earning your education comes with challenges so here are some motivational quotes for students, along with tips to help you succeed!',
      img: course1,
      admin_img: admin1
  },
  {
      id: 2,
      title: 'Web Development',
      name: 'S. Susmita',
      description: 'Earning your education comes with challenges so here are some motivational quotes for students, along with tips to help you succeed!',
      img: course2,
      admin_img: admin2
  },
  {
      id: 3,
      title: 'Art & Painting',
      name: 'A.M Riaz',
      description: 'Earning your education comes with challenges so here are some motivational quotes for students, along with tips to help you succeed!',
      img: course3,
      admin_img: admin3
  },
  {
      id: 4,
      title: 'Graphic Design',
      name: 'D.K Sayem',
      description: 'Earning your education comes with challenges so here are some motivational quotes for students, along with tips to help you succeed!',
      img: course1,
      admin_img: admin1
  },
  {
      id: 5,
      name: 'S. Susmita',
      title: 'Web Development',
      description: 'Earning your education comes with challenges so here are some motivational quotes for students, along with tips to help you succeed!',
      img: course2,
      admin_img: admin2
  },
  {
      id: 6,
      title: 'Art & Painting',
      name: 'A.M Riaz',
      description: 'Earning your education comes with challenges so here are some motivational quotes for students, along with tips to help you succeed!',
      img: course3,
      admin_img: admin3
  }
]

export default class OurCourses extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <div id="course" style={{backgroundColor: ''}}>
        <Container style={{marginTop:'120px'}}>
      <div>
      <div style={{textAlign:'center', justifyContent:'center'}}>
            <Row>
                <Col className='m-auto' xs={12} md={6}>
                        <h2 className='fw-bold mt-5'>Our Courses!</h2>
                       
                        
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
        
            {/* Courses content */}
          <div style={{marginTop:'50px'}}>
              <div className="">
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-1 g-4 gx-2">
              <Slider {...settings}>
                    {
                        courses.map(course => <CourseShow
                        key={course.id}    
                          course={course}
                        ></CourseShow>)
                  }
                </Slider>
                  </div>
                  
                
              </div>
          </div>
        </div>
        </Container>
          </div>
    );
  }
}