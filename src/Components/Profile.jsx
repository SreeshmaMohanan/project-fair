import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';

function Profile() {
    const [open, setOpen] = useState(false);
    return (
        <div className='card shadow m-3'>
            <div className='d-flex justify-content-between m-5'>
                <h3 >My Profile
                </h3>
                <button onClick={() => setOpen(!open)} className='btn'><i class="fa-sharp fa-solid fa-down-long"></i></button>
            </div>
            <Collapse  in={open}>
           <div>
                <div className='row justify-content-center mt-3 '> 
                    <label className='text-center' >
                        <input id='profile' type="file" style={{display:'none'}} />
                        <img height={'200px'}width={'200px'} className='rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-d5qr9WzS926jiHDPlYrCL01Eb0M8C8c4w&usqp=CAU" alt="" />
                    </label>
    
                </div>
                <div className='d-flex justify-content-between flex-column w-100 me-5'>
                   
                        <><input className='m-3 form-control w-75' type="text" placeholder='Github' /></>
                        <input className='m-3 form-control w-75' type="text" placeholder='LinkedIn' />
                        <button className='btn btn-warning  w-75 m-3'>Update</button>
                  
                </div>
           </div>
            </Collapse>
            
        </div>
    )
}

export default Profile