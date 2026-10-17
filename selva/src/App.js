// import logo from './logo.svg';
// import axios from 'axios';
// import { useState } from "react";
// import images from './asset/pres.webp'
// import Header from './Header'
// import ArrowFunction from './ArrowFunction';
// import ObjectExample from './ObjectExample'
// import Project from './Project'
// import Accordion from './Accordion';
// import ModalBox from './ModalBox';
// import ObjectDemo from './ObjectDemo';
// import Errorhandling from './Errorhandling';
// import Login from './Login';
// import Home from './Home';
// import Product from './Product';
// import {Routes,Route,Link} from 'react-router'
// import Counter from './Counter'
// import GetData from './GetData';
// import Task2 from './Task2'
// import './App.css'
// import { useEffect } from 'react';
// import axios from 'axios';
// import './App.css'
// function App() {
//   useEffect(()=>{
//     axios.get("http://localhost:4000/weather")
//     .then((res)=>{console.log(res.data)},[])
//   })
//   const productObj = [{
//     name: "Adidas",
//     price: "3000",
//     strikePrice: "5000",
//     image:"shoe.jpeg"

//   },
//   {
//     name: "VKC",
//     price: "1500",
//     strikePrice: "2000",git commit -m "local to vs code transfer"

//     image:"slipper.webp"

//   },
//   {
//     name: "Socks",
//     price: "500",
//     strikePrice: "1000",
//     image:"socks.webp"

//   },
// {
//   name:"crocks",
//   price:"2000",
//   strikePrice:"3000",
//   image:"crocks.jpg"
// },{
//   name:"heel",
//   price:"4000",
//   strikePrice:"6000",
//   image:"heel.webp"
// },{
//   name:"roller",
//   price:"10000",
//   strikePrice:"11000",
//   image:"roller.jpg"
// }]
  // const productSOCK = [{
  //   name: "vkc",
  //   price: "3000",
  //   strikePrice: "5000",
  //   image:"socks.jpeg"


  // },
  // {
  //   name: "LINEN",
  //   price: "2500",
  //   strikePrice: "3500",

  // },
  // {
  //   name: "VELVET",
  //   price: "4000",
  //   strikePrice: "6000",
// import { useState,useEffect } from 'react'
// import axios from 'axios'
// import Login from './Login'
// import React, { useEffect } from 'react'
// import Counter from './Counter.js'
// import GetData from './GetData.js'
// import axios from 'axios'
// import Assessment from './Assessment.js'
// import Form from './Form.js'
// import Button from '@mui/material/Button';
// import Switch from '@mui/material/Switch';
// import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
// import LockIcon from '@mui/icons-material/Lock';
// import Typography from '@mui/material/Typography'


// function App() {
//   return (
//     <div style={{marginLeft:'500px'}}>
//       <Paper style={{border:'2px solid black', width:'200px',height:'350px',padding:'20px'}}>
//       <h1>Login Page</h1>
//       <LockIcon sx={{color:'black',fontSize:40}}></LockIcon>
//       <Typography>Welcome Back !!!</Typography>
//       <TextField required  variant="outlined"  label="UserName"  type="Name" onChange={(e)=>console.log(e.target.value)}/><br/><br />
//       <TextField required variant="outlined" label ="Password" type="Password" onChange={(e)=>console.log(e)}/><br/><br/>
//       <Button variant={'contained'}>Sign Up</Button>
// </Paper>
//     </div>
//   )
// }

// export default App



// import Parent from "./Parent";
// function App() {
//   const student = {
//     name: "Arun",
//     department: "MERN Stack"
//     } 

//   return(
//     <div style={{ backgroundcolor:'lavender',marginLeft:'550px',border:'1px solid black'}}>
//     <Parent student={student} />
//     </div>
//   )
// }
// export default App;





//  import EmployeePage from "./EmployeePage";
// //  import Box from '@mui/material/Box';
// //  import Paper from '@mui/material/Paper';
// import Badge from '@mui/material/Badge';
// import IconButton from '@mui/material/IconButton';
// import MailIcon from '@mui/icons-material/Mail';
// function App() {
//   const employee = {
//     name: "Priya",
//     role: "Frontend Developer",
//     salary: 30000
//     // skills: ["React", "JavaScript", "CSS"]
//   }

//   return(
//     <center><br/>
//       <IconButton aria-label="show 4 unread messages">
//   <Badge badgeContent={4} color="primary">
//     <MailIcon />
//   </Badge>
// </IconButton>
//   <div style={{ border:'1px solid black',width:'30%',height:'40%',backgroundColor:'lavenderblush',boxShadow:'10px 10px 10px 10px black',borderRadius:'10px'}} >
//   <EmployeePage employee={employee} />
//   </div>
//   </center>
//   );
  
// }

// export default App;



// import UserList from "./UserList";
// function App() {

//   return (
//     <div>
//       <center>
//       <h1>User Directory</h1>
//       <UserList />
      
//       </center>
//     </div>
//   );
// }

// export default App;/












// import { useEffect, useState } from "react";
// import axios from "axios";
// import Dashboard from "./Dashboard";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
      
//   }, []);
//   console.log(products)
//   return (
//     <Dashboard products={products} />
//   );
// }

// export default App;










  

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentList from './StudentList';
const App=()=>{
  const [students, setStudents] = useState([
    {
      id: '',
      name: "",
      age: '',
      skills: [],
      address: { }
    }
  ]);
  const [Users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formName, setFormName] = useState('');
  const [formAge, setFormAge] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response)=>{setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
        setLoading(false);
      });
  }, []);
  const handleAddStudent = (e) => {
    e.preventDefault();
    setError('');
    if(!formName.trim()||!formAge.trim()){
      setError('fields are mandatory.');
      return;
    }

    if (isNaN(formAge) || Number(formAge) <= 0) {
      setError('Please enter a valid numeric age higher than 0.');
      return;
    } 
    const newStudent = {
      id: Date.now(),
      name: formName,
      age: parseInt(formAge, 10),
      skills: ["General"], 
      address: { street: "Default Lane", city: "Origin Town" }
    };

    setStudents([...students, newStudent]);
    setFormName('');
    setFormAge('');
  };

  return (
    <center>
    <div style={{backgroundColor:'lightblue',border:'1px solid black'}}>
      <h1> STUDENT DETAILS</h1>
      <form onSubmit={handleAddStudent}>
        <h3>Add New Student</h3>
        {error && <p>{error}</p>}
        
        <div>
          <input type="text" value={formName} onChange={(e) => setFormName(e.target.value)} placeholder="Enter name"/>
          <input type="text" value={formAge} onChange={(e) => setFormAge(e.target.value)} placeholder="Enter age"/>
          <button type="submit">Add Student</button>
        </div>
      </form>
      <h2>Student Registry</h2>
      <StudentList students={students} />
      <h2>API Users List (External Feed)</h2>
      {loading ? (
        <p>Loading external user profiles...</p>
      ) : (
        <div>
          {Users.map(user => (
            <div key={user.id}>
              <h4>{user.name}</h4>
              <p>Email: {user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </center>
  );
};

export default App;

