import React from 'react';
import Course from '../Course/Course';
import useCourses from '../../hooks/useCourses';

const Courses = () => {
    const [courses] = useCourses();
    return (
        <div>
            <div class="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-20">
                <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                    {
                        courses.map(course => <Course
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