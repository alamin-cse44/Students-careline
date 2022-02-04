import React from 'react';
import { Accordion } from 'react-bootstrap';

const AdmitForm = () => {
    return (
        <div className='container' style={{marginTop:'150px'}}>
            <div className="px-4">
                <div className="row g-5" >
                    <div className="col-md-12 col-sm-12 col-lg-5">
                        <div className='shadow'>
                    <div className='bg-warning w-100 px-5 py-3'>
                            <h5 className="card-title">Admit Form</h5>
                            <p className="card-subtitle mb-2 fw-normal">Fillup Admit Form</p>
                            </div>
                        <div className='p-5'>
                        <form action="">
                                    <input type="text" name="name" placeholder='Your Name' className='px-4 py-3 w-100 fw-bold' style={{ border: '1px solid #d1d1d1', color: '#808080' }} data-error="Name is required." required="required" id="" />
                                    
                                    <input type="email" name="name" placeholder='Your Email' className='px-4 py-3 w-100 fw-bold' style={{ border: '1px solid #d1d1d1', color: '#808080', marginTop:"35px" }} data-error="Email is required." required id="" />
                                    
                                    <input type="number" name="name" placeholder='Your Number' className='px-4 py-3 w-100 fw-bold' style={{ border: '1px solid #d1d1d1', color: '#808080',marginTop:"35px" }} data-error="Number is required." required id="" />
                                    
                                    <input type="text" name="name" placeholder='Your Subject' className='px-4 py-3 w-100 fw-bold' style={{ border: '1px solid #d1d1d1', color: '#808080', marginTop: "35px" }} data-error="Subject is required." required id="" />
                                    
                                    <input className='mt-4 fw-bold text-light px-4 py-3 ' style={{border:'none', background:'#ed6166', borderRadius:'5px'}} type="button" value="Admit Now" />
                        </form>
                            </div>
                            </div>
                    </div>


                    <div className="col-md-12 col-sm-12 col-lg-7">
                        <div className="p-3">
                            <h3 className='fw-bold mb-5' style={{ color: "#990e12" }}>Some of Our University FAQ</h3> 
                            
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>How i take online course from Eduvas?</Accordion.Header>
                                    <Accordion.Body>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How i admit Eduvas University?</Accordion.Header>
                                    <Accordion.Body>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>What is cost for a course?</Accordion.Header>
                                    <Accordion.Body>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>How i admit Eduvas University??</Accordion.Header>
                                    <Accordion.Body>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>How i take online course from Eduvas?</Accordion.Header>
                                    <Accordion.Body>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>How i admit Eduvas University?</Accordion.Header>
                                    <Accordion.Body>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its.
                                    </Accordion.Body>
                                </Accordion.Item>
                                </Accordion>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default AdmitForm;