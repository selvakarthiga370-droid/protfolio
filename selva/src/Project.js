
import {React,useState} from 'react';
import './Project.css'
const Project=()=>{
    const[value,setValue]=useState({
        id:1,
        name:"selva",
        age:20,
        dept:"IT",
        email:"sselva@gmail.com",
        mark:90
    })
     const[form,setForm]=useState({
        id:0,
        name:"",
        age:0,
        dept:"",
        email:"",
        mark:0
    })
    // const [input,setInput]=useState("WELCOME BACK")
    // const [email,setEmail]=useState("");
    // const [age,setAge]=useState("");
    // function inc(){
    //     // setValue(value+10)
    //     // if(value==0){
    //     //     setValue(1)
    //     // }
    //     // else{
    //     //     setValue(0)
    //     // }
    //     // setValue(value===0?1:0)
    //       setValue(!value)
    // function register(event){
    //     setInput(event.target.value)
        
    // }
    // function HandlerSubmit(event){
    //     event.preventDefault();
    //     alert(input+ " " +  email+ " "  +  age)
        
    // }
    // function emaily(event){
    //     setEmail(event.target.value)
        
    // }
    // function Age(event){
    //     setAge(event.target.value)
    // }
    function change(event){
        setValue({...value,[event.target.name]:event.target.value      
        })
    }
    // function next(event){
    //     setValue({...value,age:event.target.value})
    // }
    function submit(event){
        event.preventDefault()
        setForm({...form,name:value.name,age:value.age,email:value.email})
    }
     
    return(
        <div>
         {form.name}
         {form.age}
         {form.email}
        {/* //   {value}<br />
        //   <h1>
        //  <span style={{cursor:"pointer"}}onClick={inc}> {value?"🌞":"🌙"}</span>
        //  </h1> */}
         <form onSubmit={submit}>
        <label>Name</label><br/><input onChange={change} name={"name"} placeholder='enter the name'/><br/>
        <label>Email</label><br/><input onChange={change} name={"email"} placeholder='enter your mail'/><br/>
        <label>Age</label><br/><input onChange={change} name={" age"}  placeholder='enter age'/><br/>
        <button type="submit">submit</button>
         </form>
        </div>
    )
}

export default Project;