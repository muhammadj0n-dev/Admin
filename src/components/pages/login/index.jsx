import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./index.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const index = () => {
  const navigate = useNavigate()
  const [form ,setForm] = useState({})
  const handleChange =(event)=>{
    const {name ,value} =event.target;
    setForm({...form , [name] : value});
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    const {user , password} = form;
    console.log(user);
    if(user === "muhammadjon" && password === "10172004"){
      navigate("main")
    }else{
      alert("Failure")
    }
  }
 
  return (
    <>
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 ">
          <div className="card">
            <div className="card-header">
            <h1>Login</h1>
            </div>
            <div className="card-body">
            <form id='form' onSubmit={handleSubmit} className='gap-2'>
            <TextField fullWidth label="USERNAME" name='user' onChange={handleChange} id="fullWidth" className='my-2' />
            <TextField fullWidth label="Password" name='password' onChange={handleChange} id="fullHeight" className='my-2' />
          </form>
            </div>
            <div className="card-footer d-flex justify-content-center">
                <button type='submit' form='form' className='btn btn-primary'>LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default index;