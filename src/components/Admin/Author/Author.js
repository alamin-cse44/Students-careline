import React from 'react';
import author from '../../../images/author.jpg';
import TypeWriterEffect from 'react-typewriter-effect';

const Author = () => {
    return (
        <div style={{marginTop:"200px"}} className='container'>
            <div className="px-4">
                <div className="row g-3" style={{ alignItems: 'center', justifyContent: "center" }}>
                <div className="col-md-4 col-lg-4"> 
                        <img style={{width:'90%',borderRadius:'5px'}} className='' src={author} alt="" />
                    </div>
                <div className="col-md-8 col-lg-8">
                        <h1 className='fw-bold'> Hi, I'm <span style={{ color: '#bf080e' }}>Al Amin</span></h1>
                        
                        <TypeWriterEffect
                            textStyle={{
                            marginTop:'10px',
                            marginBottom:'10px',
                        fontFamily: 'Red Hat Display',
                        color: 'blue',
                        fontWeight: 500,
                        fontSize: '2em',
                            }}
                        startDelay={1000}
                        cursorColor="#3F3D56"
                            multiText={[
                                'Full Stack Developer',
                                'React-js Developer',
                                'Node-js Developer',
                                'Front-end Developer',
                                'Backend Developer',
                                'MERN stack Developer',
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={90}
                        />
                        
                        <p>I’m a student of Bachelor of Science in computer science and engineering at the University of Asia Pacific,
                        Bangladesh. I'm a positive, enthusiastic and competent Junior full stack web developer. I have a diverse
                        range of programming skills like : C, C++, Python, JavaScript, Bootstrap, Material-UI, React, Firebase ,
                        Heroku, MongoDB,MySql. Over the years, I have completed more than 15 projects. I have extensive
                        experience working both alone and as a part of a team to implement a project. I’m time sensitive and like to
                        take on challenging web development projects by the requirements of clients. I take my work as a web
                        developer seriously and surely I will update myself for the rapidly changing industry</p>
                   <button className=' btn btn-warning text-dark px-5 py-3 welcome-btn' style={{border:'none', fontWeight:'bold', borderRadius:'5px'}}>READ MORE</button>     
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Author;