import React from 'react';
import { ClockIcon, UserIcon } from '@heroicons/react/outline';

const Course = (props) => {
    const { courseName, courseThumb, courseDuration, categories, coursePrice, courseEnrollment } = props.course;
    return (
        <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-md  transition duration-500">
            <div className="relative">
                <img className="w-full rounded-xl" src={courseThumb} alt="Colors" />
                <p className="absolute top-0 bg-red-800 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">${coursePrice}</p>
            </div>
            <h1 className="mt-4 text-gray-800 text-xl font-semibold cursor-pointer text-left">{courseName}</h1>
            <h5 className="mt-4 text-gray-500 text-md font-medium text-left border-l-4 border-red-800 py-0 pl-2">{categories}</h5>
            <div className="my-4 flex justify-between items-center">
                <div className="flex space-x-1 items-center">
                    <UserIcon className="h-5 w-5 text-red-800" aria-hidden="true" />
                    <p className="text-gray-500">{courseEnrollment} Enrollments</p>
                </div>
                <div className="flex space-x-1 items-center">
                    <ClockIcon className="text-red-800 h-5 w-5" aria-hidden="true" />
                    <p className="text-gray-500">{courseDuration}</p>
                </div>
            </div>
            <button className="mt-2 mb-4 text-lg w-full text-white bg-red-800 hover:bg-red-700 transition-all py-1.5 rounded-xl shadow-lg">Enroll now</button>
        </div>
    );
};

export default Course;