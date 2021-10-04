import React from 'react';
import Bannar from '../Bannar/Bannar';
import TopCourses from '../TopCourses/TopCourses';

const Home = () => {
    return (
        <div className="container mx-auto px-4">
            <Bannar></Bannar>
            <TopCourses></TopCourses>
        </div>
    );
};

export default Home;