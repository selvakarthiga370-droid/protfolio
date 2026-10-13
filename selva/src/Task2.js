import {React,useEffect,useState} from 'react'
import axios from 'axios'
function Task2() {
    const[theme,setTheme]=useState("light")
    const[data,setData]=useState()
let dob=new Date("1982-01-04");
let today=new Date("2026-10-12");
let age=today.getFullYear()-dob.getFullYear();
let month=today.getMonth()-dob.getMonth();
if(month<0||(month===0&&today.getDate()<dob.getDate())){
  age--;
}
  return (
    <div style={{
      background: theme==='light'?'#e5e7b2' : '#bcc44e',
      color:theme==='light'?'#1a1515':'#ffffff',
      padding:'20px',
      minHeight:'100vh',
    }}>
        <center>
      <button onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}>
        mode({theme === 'light' ? 'dark' : 'Light '})</button>
      <span> </span>
      <h2>Age:{age}</h2>

        </center>
      </div>
  )
}

export default Task2;
