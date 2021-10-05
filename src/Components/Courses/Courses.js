import React from 'react';
import Course from '../Course/Course';
import useCourses from '../../hooks/useCourses';

const Courses = () => {
    const [courses] = useCourses();
    return (
        <div>
            <h1 className="text-6xl font-bold mt-12 capitalize">Popular all courses</h1>
            <div className="min-h-screen flex justify-center items-center py-20">
                <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-7 space-y-4 md:space-y-0">
                    {
                        courses?.map(course => <Course
                            key={Math.random()}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Courses;