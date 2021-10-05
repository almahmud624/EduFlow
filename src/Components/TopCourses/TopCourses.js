import React from 'react';
import { Link } from 'react-router-dom';
import { ClockIcon, UserIcon } from '@heroicons/react/outline';
import useCourses from '../../hooks/useCourses';
import './TopCourses.css';

const TopCourses = () => {
    const [courses] = useCourses();
    return (
        <div className="py-7 bg-gray-900">
            <h1 className="text-6xl font-bold mt-12 capitalize text-white">Our top courses</h1>
            <div className="min-h-screen flex justify-center items-center py-20">
                <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-7 space-y-4 md:space-y-0">
                    {
                        courses?.slice(0, 4).map(course => <div key={Math.random()} className="card max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform transition duration-500">
                            <div className="relative">
                                <img className="w-full rounded-xl" src={course.courseThumb} alt="Colors" />
                                <p className="absolute top-0 bg-red-800 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">${course.coursePrice}</p>
                            </div>
                            <h1 className="course-title mt-4 text-gray-800 text-xl font-semibold cursor-pointer text-left">{course.courseName}</h1>
                            <h5 className="course-categories mt-4 text-gray-500 text-md font-medium text-left border-l-4 border-red-800 py-0 pl-2">{course.categories}</h5>
                            <div className="course-extra-info my-4 flex justify-between items-center">
                                <div className="flex space-x-1 items-center">
                                    <UserIcon className="h-5 w-5 text-red-800" aria-hidden="true" />
                                    <p className="text-gray-500">{course.courseEnrollment} Enrollments</p>
                                </div>
                                <div className="flex space-x-1 items-center">
                                    <ClockIcon className="text-red-800 h-5 w-5" aria-hidden="true" />
                                    <p className="text-gray-500">{course.courseDuration}</p>
                                </div>
                            </div>
                            <button className="enroll-btn mt-2 mb-4 text-lg w-full text-white bg-red-800 py-1.5 rounded-xl shadow-lg hover:bg-red-700 transition-all">Enroll now</button>
                        </div>)
                    }
                </div>
            </div>
            <Link to='/courses'>
                <button className="mt-2 text-lg font-semibold text-white bg-red-800 py-2 rounded shadow-lg px-8">Explore All</button>
            </Link>
        </div>
    );
};

export default TopCourses;