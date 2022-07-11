import React,{useState} from 'react'
import './register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterpassword:""
    })

    const handlechange =(e)=>{
         const {name,value} = e.target
         setUser({
            ...user,
            [name]:value
         })
        
    }

    const register =()=>{
          const {name,email,password,reEnterpassword} = user;
          if(name && email && password && (password===reEnterpassword))
          {
            // alert("Posted")
            axios.post("http://localhost:9002/register" , user)
            .then(res=>{
              alert(res.data.message)
              navigate('/login')
            })
          }

          else{
            alert("Invalid Input")
          }
    }

  return (
    <div className="register">
       {/* { console.log("User", user)} */}
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder='Your Name' onChange={handlechange} />
        <input type="text" name="email" value={user.email} placeholder='Your email' onChange={handlechange} />
        <input type="text" name="password" value={user.password} placeholder='Your password' onChange={handlechange} />
        <input type="text" name="reEnterpassword" value={user.reEnterpassword}placeholder='Re-enter password' onChange={handlechange} />
        <div className="button" onClick={register}>Register</div>
        <div>or</div>
        <div className="button" onClick={()=>navigate('/login')}>Login</div>

    </div>
  )
}

export default Register;