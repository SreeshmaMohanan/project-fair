import React, { useState } from 'react'
import { Form} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { registerAPI } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Authenication({register}) {
    const isRegisterForm=register?true:false 
    const navigate=useNavigate()
    const [userData,setUserData]=useState({
        username:"",password:"",email:""
    })
    const handleRegister=async(e)=>{
        e.preventDefault()
        const {username,email,password}=userData
        if(!username||!email||!password){
            toast.info("Please fill all fields")
        }else{
            const result= await registerAPI(userData)
            
            if(result.status===200){
                toast.success(`${result.data.username} has registered completly!!!!`)
                setUserData({username:"",email:"",password:""})
                navigate("/login")
            
            }else{
                toast.warning('Account alreay exists!!!')
                console.log(result);

            
            }
            
        
        }

    }

  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div className='w-75 container'>
            <Link style={{textDecoration:'none'}} to='/' className=''>Back to home</Link>
            <div className='card shadow p-5  bg-dark text-light'>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img src="https://img.lovepik.com/element/45009/2860.png_860.png" alt="" className='rounded-start w-100' />
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center flex-column">
                            <h1>Project-Fair</h1>
                            <h5 className='fw-bolder mt-2 pb-3 text-light'>
                                {
                                    isRegisterForm?'sign up to your account':'sign in to your Account'
                                }
                                <Form className='text-light w-100'>
                                    {
                                        isRegisterForm &&
                                        <Form.Group className='mb-3' controlId='formBasicName'>
                                            <Form.Control onChange={e=>setUserData({...userData,username:e.target.value})} value={userData.username} type='usename' placeholder='usename'>
                                            </Form.Control>
                                        </Form.Group>
                                    }
                                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                                            <Form.Control  value={userData.email}  onChange={e=>setUserData({...userData,email:e.target.value})} type='email' placeholder='Enter your email'>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group className='mb-3' controlId='formBasicpaswd'>
                                            <Form.Control  value={userData.password}  onChange={e=>setUserData({...userData,password:e.target.value})} type='password' placeholder='Enter password'>
                                            </Form.Control>
                                        </Form.Group>
                                        {
                                            isRegisterForm?
                                            <div className="mt-3">
                                                <button onClick={handleRegister} className="btn btn-light mb-2">Register</button>
                                                <p>Already Have An Account? Click here to <Link to='/login'>Login</Link></p>
                                            </div>:
                                            <div>
                                                <button className="btn btn-light mb-2">Login</button>
                                                <p>New User? Click here to <Link to='/register'>Register</Link></p>
                                            </div>
                                        }

                                </Form>
                            </h5>
                        </div>
                    </div>
                </div>

            </div>
    
        </div>
        <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
        />

    </div>
  )
}

export default Authenication