import React from 'react';
import Footer from '../../Shared/Footer';
import Navigation from '../../Shared/Navigation';
import AdmitForm from '../../Students/AdmitForm/AdmitForm';
import LatestNews from '../../Students/LatestNews/LatestNews';
import StudentsComment from '../../Students/StudentsComment/StudentsComment';
import UpcommingEvents from '../../UpcommingEvents/UpcommingEvents/UpcommingEvents';
import About from '../About/About';
import Banner from '../Banner/Banner';
import OurCourses from '../OurCourses/OurCourses';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Welcome></Welcome>
            <OurCourses></OurCourses>
            <UpcommingEvents></UpcommingEvents>
            <StudentsComment></StudentsComment>
            <AdmitForm></AdmitForm>
            <LatestNews></LatestNews>
            <Footer></Footer>
        </div>
    );
};

export default Home;