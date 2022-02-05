import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeWriterEffect from 'react-typewriter-effect';

const About = () => {
    return (
        <Container id='about' style={{marginTop:'110px'}}>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <div style={{textAlign:'center', justifyContent:'center'}}>
            <Row>
                <Col className='m-auto' xs={12} md={6}>
                        <h2 className='fw-bold'>About Us</h2>
                        <TypeWriterEffect
                            textStyle={{
                            marginTop:'30px',
                        fontFamily: 'Red Hat Display',
                        color: 'blue',
                        fontWeight: 500,
                        fontSize: '2em',
                                textAlign: 'center',
                        justifyContent:'center'
                            }}
                        startDelay={1000}
                        cursorColor="#3F3D56"
                            multiText={[
                                'Education is the backbone of a nation',
                                'Education can Change Your Life',
                                'Education is the backbone of a nation',
                                'Education can Change Your Life',
                                'Education is the backbone of a nation',
                                'Education can Change Your Life',
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={90}
                        />
                        
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

        
         </Container>
    );
};

export default About;