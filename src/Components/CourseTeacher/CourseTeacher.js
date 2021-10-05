import React from 'react';
import useCourses from '../../hooks/useCourses';
import { AcademicCapIcon } from '@heroicons/react/outline';

const CourseTeacher = () => {
    const [courses] = useCourses();
    return (
        <div className="container mx-auto px-4 mt-7">
            <h1 className="text-6xl font-bold mt-12 capitalize">Our Teachers</h1>
            <div className="min-h-screen flex justify-center items-center py-20">
                <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-7 space-y-4 md:space-y-0">
                    {
                        courses?.slice(0, 4).map(course => <div key={Math.random()} className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
                            <img className="w-full h-56 object-cover object-center" src={course.teacherThumb} alt="avatar" />
                            <div className="flex items-center px-6 py-3 bg-gray-900">
                                <AcademicCapIcon className="text-white h-6 w-6" aria-hidden="true" />
                                <h1 className="mx-3 text-white font-semibold text-lg">Teacher</h1>
                            </div>
                            <div className="pt-4 pb-6 px-6">
                                <h1 className="text-2xl font-semibold text-gray-800">{course.courseTeacher}</h1>
                                <p className="py-2 text-md text-gray-700">{course.teacherSkills}</p>
                                <div className="flex justify-evenly">
                                    <div className="flex items-center mt-4 text-gray-700">
                                        <a href="/"><i className="fab fa-facebook-f text-xl"></i></a>
                                    </div>
                                    <div className="flex items-center mt-4 text-gray-700">
                                        <a href="/"><i className="fab fa-instagram text-xl"></i></a>
                                    </div>
                                    <div className="flex items-center mt-4 text-gray-700">
                                        <a href="/"><i className="fab fa-linkedin-in text-xl"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default CourseTeacher;