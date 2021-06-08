import React,{useState} from 'react'
import Axios from 'axios';
import './Register.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from 'react-router-dom';


const Register = (props) => {
 const history=useHistory()

const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[phoneNo,setphoneNo]=useState('');
const[passwordd,setPassword]=useState('');

// const[errors,setErrors]=useState({})
function validateForm() {
    if(!name)
    return("Name Required")
}

function ValidateEmail() 
{
if (!email)
  {
    return ("Email Required")
  }
  else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {
      return("Invalid Email")
  }
}
function validatephoneno(){
    if(!phoneNo)
    {
        return("Phone No Required")
    }
    else if(!/^\d{10}$/.test(phoneNo)){
        return("Number Should Be Greater Than 10")
    }
    
}
function validatepassword(){
    if(!passwordd){
        return("Password Required")
    }
    else if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(passwordd))
    {
        return("password should have one uppercase,number and special character ")
    }
}

        const submit=(a,c,d,e)=>{
        const register={
            user_name:a,
            email_id:c,
            phoneNo:d,
            password:e,
        }
        Axios.post('http://localhost:8000/users/addUser',register)
        .then((res)=>{
        alert(res.data.message)

            if(res.data.message ==="Registered successfully  please login in")
        {
       history.push('/login')
        }})
        
        .catch((e)=>{alert(e.message)})
        console.log(register)
    }

  const handlesubmit=(e)=>{

    e.preventDefault()
}

    return (
        <div class="wrapper-class">
            <div class="wrap">
            <div class="topbar-class">
              <div class="contain">
                <h5 className="app-name">BuildOut</h5>
                <div class="topbar-items">
                <Link to='/login' className='topbar-links'>
                    Login
                </Link>
                <Link to='/Register' className='topbar-links'>
                    Register
                </Link>
              </div>
            </div>
            </div>
            <div class="login-con">
            <div className="form-container" >
                
         <form onSubmit={handlesubmit} className="form">
         <h3>Register</h3>
             <div className="form-inputs" >
            <label htmlFor="name" className="form-label" > Name</label>
                <input type="text" name='name' placeholder=" Enter Your Name" className="form-control"  onChange={(e)=>setName(e.target.value)}/>
                {validateForm()}
               </div>
               
               <div className="form-inputs">
            <label htmlFor="email"  className="form-label"> Email</label>
                <input type="email" name='email'placeholder=" Enter Your EMAIL"  className="form-control " onChange={(e)=>setEmail(e.target.value)} />
{ValidateEmail()}
               </div>
               <div className="form-inputs">
            <label htmlFor="phone NO"  className="form-label"> Phone NO:</label>
                <input type="text"name='phoneNo' placeholder=" Enter Your PHONE NO"  className="form-control"onChange={(e)=>setphoneNo(e.target.value)} maxLength='10'/>
               {validatephoneno()}
               </div>
               <div className="form-inputs">
            <label htmlFor="password" className="form-label"> Password</label>
                <input type="password" name='password'placeholder=" Enter Your PASSWORD"  className="form-control"onChange={(e)=>setPassword(e.target.value)}/>
               {validatepassword()}
               </div>
               <button className="btn btn-primary" onClick={()=>{submit(name,email,phoneNo,passwordd);props.history.goBack()}} disabled={validateForm()}>Register </button>
        </form> 
        </div>
            </div>
            </div>
            <footer class="c-footer">
            <div class="c-inner">
              Copyright BuildOut. All rights reserved. For internal use only.
            </div>
          </footer>
          
        </div>

    )
}
export default Register