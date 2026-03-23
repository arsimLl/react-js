import React from "react";

function StudentsList() {
    const students = [
        {
            "id": 1,
            "firstName": "Liam",
            "lastName": "Walker",
            "age": 20,
            "gender": "Male",
            "email": "liam.walker@example.com",
            "phone": "+38344111222",
            "major": "Computer Science",
            "gpa": 3.6,
            "year": "Sophomore",
            "address": {
                "street": "Rruga B",
                "city": "Pristina",
                "country": "Kosovo",
                "score": 60
            }
        },
        {
            "id": 2,
            "firstName": "Olivia",
            "lastName": "Harris",
            "age": 21,
            "gender": "Female",
            "email": "olivia.harris@example.com",
            "phone": "+38344111333",
            "major": "Business Administration",
            "gpa": 3.8,
            "year": "Junior",
            "address": {
                "street": "Rruga C",
                "city": "Pristina",
                "country": "Kosovo",
                "score": 40
            }
        },
        {
            "id": 3,
            "firstName": "Noah",
            "lastName": "Clark",
            "age": 22,
            "gender": "Male",
            "email": "noah.clark@example.com",
            "phone": "+38344111444",
            "major": "Electrical Engineering",
            "gpa": 3.4,
            "year": "Senior",
            "address": {
                "street": "Rruga D",
                "city": "Pristina",
                "country": "Kosovo",
                "score": 99
            }
        },
        {
            "id": 4,
            "firstName": "Emma",
            "lastName": "Lewis",
            "age": 19,
            "gender": "Female",
            "email": "emma.lewis@example.com",
            "phone": "+38344111555",
            "major": "Biochemistry",
            "gpa": 3.9,
            "year": "Freshman",
            "address": {
                "street": "Rruga E",
                "city": "Pristina",
                "country": "Kosovo",
                "score": 67
            }
        },
        {
            "id": 5,
            "firstName": "Ava",
            "lastName": "Young",
            "age": 23,
            "gender": "Female",
            "email": "ava.young@example.com",
            "phone": "+38344111666",
            "major": "Psychology",
            "gpa": 3.7,
            "year": "Senior",
            "address": {
                "street": "Rruga F",
                "city": "Pristina",
                "country": "Kosovo",
                "score": 65
            }
        },
        {
            "id": 6,
            "firstName": "William",
            "lastName": "King",
            "age": 24,
            "gender": "Male",
            "email": "william.king@example.com",
            "phone": "+38344111777",
            "major": "Law",
            "gpa": 3.5,
            "year": "Graduate",
            "address": {
                "street": "Rruga G",
                "city": "Pristina",
                "country": "Kosovo",
                "score": 80
            }
        },
        {
            "id": 7,
            "firstName": "Sophia",
            "lastName": "Wright",
            "age": 20,
            "gender": "Female",
            "email": "sophia.wright@example.com",
            "phone": "+38344111888",
            "major": "Architecture",
            "gpa": 3.6,
            "year": "Sophomore",
            "address": {
                "street": "Rruga H",
                "city": "Pristina",
                "country": "Kosovo",
                "score": 45
            }
        },
        {
            "id": 8,
            "firstName": "James",
            "lastName": "Scott",
            "age": 22,
            "gender": "Male",
            "email": "james.scott@example.com",
            "phone": "+38344111999",
            "major": "Finance",
            "gpa": 3.3,
            "year": "Senior",
            "address": {
                "street": "Rruga I",
                "city": "Pristina",
                "country": "Kosovo",
                "score": 75
            }
        },
        {
            "id": 9,
            "firstName": "Mia",
            "lastName": "Green",
            "age": 18,
            "gender": "Female",
            "email": "mia.green@example.com",
            "phone": "+38344222000",
            "major": "Nursing",
            "gpa": 3.8,
            "year": "Freshman",
            "address": {
                "street": "Rruga J",
                "city": "Pristina",
                "country": "Kosovo",
                "score": 60
            }
        },
        {
            "id": 10,
            "firstName": "Benjamin",
            "lastName": "Adams",
            "age": 21,
            "gender": "Male",
            "email": "benjamin.adams@example.com",
            "phone": "+38344222111",
            "major": "Political Science",
            "gpa": 3.2,
            "year": "Junior",
            "address": {
                "street": "Rruga K",
                "city": "Pristina",
                "country": "Kosovo",
                "score": 85
            }
        }
    ]

    const activeStudents = students.filter(student => student.isActive);
    const topStudents = students.filter(student => student.score < 60);
    return (
        <div>
            <ul>
                {students.map((student) => (
                    <li>{student.firstName}</li>
                ))}
            </ul>

            <ul>
                {topStudents.map((student) => (
                    <li>{student.firstName}</li>
                ))}
            </ul>
        </div>
    )
}

export default StudentsList;

