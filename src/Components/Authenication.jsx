import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Authenication({register}) {
    const isRegisterForm=register?true:false 

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
                                            <Form.Control type='usename' placeholder='usename'>
                                            </Form.Control>
                                        </Form.Group>
                                    }
                                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                                            <Form.Control type='email' placeholder='Enter your email'>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group className='mb-3' controlId='formBasicpaswd'>
                                            <Form.Control type='password' placeholder='Enter password'>
                                            </Form.Control>
                                        </Form.Group>
                                        {
                                            isRegisterForm?
                                            <div className="mt-3">
                                                <button className="btn btn-light mb-2">Register</button>
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

    </div>
  )
}

export default Authenication