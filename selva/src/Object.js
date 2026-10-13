import React, { useState } from 'react';
function StudentTable() {
  const [value, setValue] = useState("");
  const students = [
    { id: 1, name: "selva", age: 20, dept: "IT", marks: 85 },
    { id: 2, name: "saran", age: 20, dept: "CSE", marks: 90 },
    { id: 3, name: "karthiga", age: 20, dept: "AI", marks: 78 },
    { id: 4, name: "naveen", age: 20, dept: "CY", marks: 88 },
    { id: 5, name: "tamil", age: 20, dept: "CSBS", marks: 92 },
    { id: 6, name: "thiru", age: 20, dept: "MC", marks: 81 },
    { id: 7, name: "theni", age: 20, dept: "IT", marks: 84 },
    { id: 8, name: "neshiga", age: 20, dept: "BM", marks: 89 },
    { id: 9, name: "harshini", age: 20, dept: "TECH", marks: 95 },
    { id: 10, name: "mounika", age: 20, dept: "DS", marks: 87 },
  ]; 
  const car={
     carname:"bmw",
     model:"x5",
     color:"black",
     price:50000,
     mileage:15,
     speed:200,
     engine:"v8",
     sound:"loud",
     horn:"loud",
     fuel:"petrol",
  }
    const{carname,modal,color,price,milage,...remains}=car;
    console.log(remains);

  return (
    <div>
      <h1>Student List</h1>
      <table border="1" cellPadding="10" cellSpacing="0"  Padding-righ="center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.dept}</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default StudentTable;
