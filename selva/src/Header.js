
import { useState, useEffect } from 'react';

function Header() {

  const [status, setStatus] = useState("");

    const cTime = new Date().toLocaleTimeString();
    console.log(cTime);
    if(cTime>="16:05:00" && status!= "grey"){
        console.log("system is offline")
        setStatus("grey")
    }
  return (
    <>
    <div style={{width:"100%",height:"100vh",backgroundColor:status}}>
     HEADER REACT
     <p>{cTime}</p>
      {status}
      <button disabled={status=="grey"?true:false}>test</button>
      </div>
    </>
  )
}
export default Header;
