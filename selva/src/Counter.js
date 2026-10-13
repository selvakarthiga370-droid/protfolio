import {React,useState,useEffect} from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)

    const btn={
        padding:"10px",
        borderRadius:"10px",
        backgroundColor:"purple",
        color:"white",
        border:"none",
        margin:"5px",
        cursor:"pointer"
    }

    //without dependeies
    useEffect(()=>{
         console.log("useffect rendered")
    },[])
    //with dependeies
    useEffect(()=>{ 
        console.log("counter button is pressed")},[])
    //with value dependeies
    useEffect(()=>{console.log("every time")},[count])

    function timeout(){
        setTimeout(
            ()=>{
                console.log("test")},1000
        )
    }
    function interval(){
        setInterval(()=>{
            console.log("interval test")
        },1000)
    }
  return (
    <div style={{textAlign:"center"}}>
      <h1>Counter:{count}</h1>
      <button  style={btn} onClick={()=>setCount(count + 1)}>INCREMENT</button>
      <button  style={btn} onClick={()=>setCount(count - 1)}>DECREMENT</button>
      <button style={btn} onClick={()=>setCount(0)}>RESET</button>
      <button style={btn} onClick={(timeout)}>Timeout</button>
    </div>
  )
}

export default Counter
