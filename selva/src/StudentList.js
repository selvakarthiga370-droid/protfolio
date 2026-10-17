import React from 'react';
import StudentCard from './StudentCard';
const StudentList = ({students}) => {
  if (students.length === 0) {
    return <p>No students available</p>;
  }
  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          age={student.age}
          skills={student.skills}
          address={student.address}
        />
      ))}
    </div>
  );
};

export default StudentList;
