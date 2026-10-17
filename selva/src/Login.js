import {React,useState} from 'react'
import axios from 'axios'
function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === 'gmailTest' && password === 'admin123') {
      axios.get('https://dummyjson.com/c/e2d7-5698-4370-bbf7')
        .then((response) => {
          alert('Login Successful!')
        })

    }
     else {
      alert('Login Failed!')
    }
  }

  return (
    <div style={{
    backgroundColor: '#cd90db'
    ,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
     <center>
    <div  style={{
      backgroundColor: 'white',
      padding: '30px',
      width: '250px',
      borderRadius: '20px',
      boxShadow: '0px 0px 10px gray',
      textAlign: 'center'
    }}>
     
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Username </label><input type="text"  placeholder='name' value={username} onChange={(e) => setUsername(e.target.value)  } required />
        </div>
        <br />
        <div>
        <label>Password  </label><input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <br />
        <button type="submit" style={{background:'lavender',borderRadius:'10px'}}>Login</button>
      </form>
    
      </div>
        </center>
    </div>
  )
}
export default Login