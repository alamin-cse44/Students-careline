import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import admin1 from '../../../images/admin1.jpg';
import admin2 from '../../../images/admin2.jpg';
import admin3 from '../../../images/admin3.jpg';
import Comments from "../Comments/Comments";

const comments = [
  {
      id: 1,
      name: 'D.K Sayem',
      description: 'Earning your education comes with challenges so here are some motivational quotes for students, along with tips to help you succeed!',
      admin_img: admin1
  },
  {
      id: 2,
      name: 'S. Susmita',
      title: 'Women Education Scolarship 2019',
      description: 'Earning your education comes with challenges so here are some motivational quotes for students, along with tips to help you succeed!',
      admin_img: admin2
  },
  {
      id: 3,
      name: 'A.M Riaz',
      title: 'Graphic Design is a Key Profession',
      description: 'Earning your education comes with challenges so here are some motivational quotes for students, along with tips to help you succeed!',
      admin_img: admin3
  },
  {
      id: 4,
      name: 'D.K Sayem',
      description: 'Earning your education comes with challenges so here are some motivational quotes for students, along with tips to help you succeed!',
      admin_img: admin1
  },
  {
      id: 5,
      name: 'S. Susmita',
      title: 'Women Education Scolarship 2019',
      description: 'Earning your education comes with challenges so here are some motivational quotes for students, along with tips to help you succeed!',
      admin_img: admin2
  },
  {
      id: 6,
      name: 'A.M Riaz',
      title: 'Graphic Design is a Key Profession',
      description: 'Earning your education comes with challenges so here are some motivational quotes for students, along with tips to help you succeed!',
      admin_img: admin3
  }
]

export default class StudentsComment extends Component {
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
      <div style={{backgroundColor: '#f7f7f7'}}>
        <Container style={{marginTop:'120px'}}>
      <div>
        <h2 className="text-center my-5 p-5 fw-bold"><span style={{color:"blue"}}>STUDENT</span> COMMENTS!</h2>
        
            {/* comment content */}
          <div style={{marginTop:'50px'}}>
              <div className="">
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-1  g-4 gx-2">
              <Slider {...settings}>
                    {
                        comments.map(comment => <Comments
                        key={comment.id}    
                          comment={comment}
                        ></Comments>)
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