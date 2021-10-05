import React from 'react';
import Bannar from '../Bannar/Bannar';
import CourseTeacher from '../CourseTeacher/CourseTeacher';
import TopCourses from '../TopCourses/TopCourses';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <TopCourses></TopCourses>
            <CourseTeacher></CourseTeacher>
        </div>
    );
};

export default Home;