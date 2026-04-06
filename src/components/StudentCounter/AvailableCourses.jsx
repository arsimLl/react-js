
import React from "react";
import CourseCard from "./Student"

function AvailableCourses() {
    const courses = [
        {
            "course": "HTML & CSS",
            "firstName": "Sara",
            "lastName": "Lee",
            "Lessons": 12
        },

        {
            "course": "JavaScript",
            "firstName": "Sara",
            "lastName": "Lee",
            "Lessons": 15
        },

        {
            "course": "React",
            "firstName": "Sara",
            "lastName": "Lee",
            "Lessons": 18
        },

        {
            "course": "NodeJs",
            "firstName": "Sara",
            "lastName": "Lee",
            "Lessons": 20
        },
    ]
    return (
        <div className="card">
            <h2>Available Courses</h2>
            <p>Lorem ipsum dolor sit.lorem ipsum dolor sit amet consectetur.</p>

            <div className="course-grid">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
}

export default AvailableCourses;