import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import events1 from '../../../images/events1.jpg';
import events2 from '../../../images/events2.jpg';
import events3 from '../../../images/events3.jpg';
import events4 from '../../../images/events4.jpg'; 
import EventsShow from '../EventsShow/EventsShow';


const events = [
    {
        id: 1,
        title: 'Online Education for kids 2021-2022',
        description: 'Lorem Ipsum is simply dummy text of the pnng and typesetting industry',
        img: events1,
        location: 'NCC Tower,USA',
        time: '3:00pm - 5pm'
    },
    {
        id: 2,
        title: 'Women Education Scolarship 2019',
        description: 'Lorem Ipsum is simply dummy text of the pnng and typesetting industry',
        img: events2,
        location: 'NCC Tower,USA',
        time: '3:00pm - 5pm'
    },
    {
        id: 3,
        title: 'Graphic Design is a Key Profession',
        description: 'Lorem Ipsum is simply dummy text of the pnng and typesetting industry',
        img: events3,
        location: 'NCC Tower,USA',
        time: '3:00pm - 5pm'
    },
    {
        id: 4,
        title: 'Graphic Design is a Key Profession',
        description: 'Lorem Ipsum is simply dummy text of the pnng and typesetting industry',
        img: events4,
        location: 'NCC Tower,USA',
        time: '3:00pm - 5pm'
    }
]

const UpcommingEvents = () => {
    return (
        <div id="events">
            <div style={{backgroundColor: '#f7f7f7'}}>
        <Container style={{marginTop:'120px'}}>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <div style={{textAlign:'center', justifyContent:'center'}}>
            <Row>
                <Col className='m-auto' xs={12} md={6}>
                        <h2 className='fw-bold mt-5'>Upcomming Events</h2>
                       
                        
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


            {/* Events content */}
            <div style={{marginTop:'50px'}}>
                <div className="">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
                    {
                                    events.map(event => <EventsShow
                                        key={event.id}
                                        event={event}
                                    ></EventsShow>)
                    }
                </div>
                
                    
                
                </div>
            </div>

        
            </Container>
            </div>
        </div>
    );
};

export default UpcommingEvents;