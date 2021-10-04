import { useEffect, useState } from 'react';

const useCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courseData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return [courses, setCourses];
};

export default useCourses;