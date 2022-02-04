import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import prof1 from '../../../images/professor1.jpg';
import prof2 from '../../../images/professor2.jpg';
import prof3 from '../../../images/professor3.jpg';
import prof4 from '../../../images/professor4.jpg';
import prof5 from '../../../images/professor5.jpg';
import prof6 from '../../../images/professor6.jpg';
import prof7 from '../../../images/professor7.jpg';
import prof8 from '../../../images/professor1.jpg';
import ShowTeams from '../ShowTeams/ShowTeams';

const professors = [
    {
        id: 1,
        name: 'Elan Btrao',
        designation: 'Teacher',
        img: prof1
    },
    {
        id: 2,
        name: 'Johan Doe',
        designation: 'Teacher',
        img: prof2
    },
    {
        id: 3,
        name: 'Deniel Sim',
        designation: 'Teacher',
        img: prof3
    },
    {
        id: 4,
        name: 'Jordan Matro',
        designation: 'Teacher',
        img: prof4
    },
    {
        id: 5,
        name: 'Johan Doe',
        designation: 'Teacher',
        img: prof5
    },
    {
        id: 6,
        name: 'Jordan Matro',
        designation: 'Teacher',
        img: prof6
    },
    {
        id: 7,
        name: 'Deniel Sim',
        designation: 'Teacher',
        img: prof7
    },
    {
        id: 8,
        name: 'Elan Btrao',
        designation: 'Teacher',
        img: prof8
    }
]

const OurTeams = () => {
    return (
        <div>
            <div style={{backgroundColor: ''}}>
        <Container style={{marginTop:'50px'}}>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <div style={{textAlign:'center', justifyContent:'center'}}>
            <Row>
                <Col className='m-auto' xs={12} md={6}>
                        <h2 className='fw-bold mt-5'>Our Professors</h2>
                       
                        
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

                    {/* teams content */}
            <div style={{marginTop:'50px'}}>
                <div className="">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {
                        professors.map(professor => <ShowTeams
                        key={professor.id}    
                        professor={professor}
                        ></ShowTeams>)
                    }
                </div>
                
              </div>
            </div>

                </Container>
                
                
            </div>
        </div>
    );
};

export default OurTeams;