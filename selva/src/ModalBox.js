import {React,useState} from 'react'
import './ModalBox.css'
import image from './MERN.jpeg'
function ModalBox() {
    const[Modal,setModal]=useState(false)

  return (
    < ><br />
    <h1>MODALBOX</h1>
    {Modal ? <div className='modal'>
    <span><h2>ARE YOU SURE,DO YOU WANT TO CONTINUE</h2></span> 
    <br/>
    <button onClick={()=>setModal(false)}>OK</button>
    </div>:""}<br/>
    <button onClick={() => setModal(true)}>confirm</button>
    <div><br/>
        <button>x</button>
        <div>
        <img src={image} />
        </div>
        <h1>Secure all your device</h1>
        <p>Ensure your moblie phone,laptop and others devices are protected online</p>
        <button className="">premium </button>
    </div>
    </>

  )
}

export default ModalBox
