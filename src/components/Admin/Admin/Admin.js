import React from 'react';
import Footer from '../../Shared/Footer';
import Navigation from '../../Shared/Navigation';
import Author from '../Author/Author';
import OurTeams from '../OurTeams/OurTeams';

const Admin = () => {
    return (
        <div>
            <Navigation></Navigation>
            <OurTeams></OurTeams>
            <Author></Author>
            <Footer></Footer>
        </div>
    );
};

export default Admin;