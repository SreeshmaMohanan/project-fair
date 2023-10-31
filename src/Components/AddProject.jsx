import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

function AddProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div> <Button variant="primary" onClick={handleShow}>
    Add project
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Project title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div className="row">
            <div className="col-lg-6">
                <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75ebrwvgVW5Ks_oLfCbG8Httf3_9g-Ynl_Q&usqp=CAU" alt="" />
            </div>
            <div className="col-lg-6">
              <div className='mb-3'>  <input type="text" className="form-control" placeholder='project-title' /></div>
               <div className='mb-3'> <input type="text" className="form-control"placeholder='Language used' /></div>
               <div className='mb-3'> <input type="text" className="form-control" placeholder='Github link' /></div>
               <div className='mb-3'>
                    <input type="text" className="form-control" placeholder='Linkedin link' />
                </div>
                <div className='mb-3'>
                    <input type="text" className="form-control" placeholder='Project overview' />
                </div>
               </div>
        </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save
      </Button>
    </Modal.Footer>
  </Modal></div>
  )
}

export default AddProject
