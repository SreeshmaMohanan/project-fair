import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { addProjectAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddProject() {
  const [projectDetails,setProjectDetails]=useState({
    title:"",languages:"",overview:"",github:"",website:"",projectImage:""
  })
  const [preview,setPreview]=useState("")

  console.log(projectDetails);
    const [show, setShow] = useState(false);
const [token,setToken]=useState("")
    const handleClose = () =>{ 
      setShow(false);
      setProjectDetails({
        title:"",languages:"",overview:"",github:"",website:"",projectImage:""

      })
      setPreview("")
    }
    const handleAdd= async(e)=>{
      e.preventDefault();
      const {title,languages,overview,github,projectImage,website}=projectDetails
      if(!title||!languages||!overview||!github||!projectImage||!website){
        toast.info('Please fill all fields')
      }else{
        const reqBody= new FormData()
        reqBody.append("title",title)
        reqBody.append("languages",languages)
        reqBody.append("overview",overview)
        reqBody.append("github",github)
        reqBody.append("projectImage",projectImage)
        reqBody.append("website",website)
      if(token){
      const  reqHeader={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        const result= await addProjectAPI(reqBody,reqHeader)
        if(result.status===200){
          console.log(result.data);
          handleClose()
          toast.success(`Project added`)


        }else{
          console.log(result);
          toast.warning(result.response.data);
        }     
        
      }
        
      }
    }
    const handleShow = () => setShow(true);
    useEffect(()=>{
      if(projectDetails.projectImage){
        setPreview(URL.createObjectURL(projectDetails.projectImage))
      }
    },[projectDetails.projectImage])


    useEffect(()=>{
      if(sessionStorage.getItem("token")){
        setToken(sessionStorage.getItem("token"))
      }else{
        setToken("")
      }

    },[])
  
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
              <label >
                <input type="file" style={{display:'none'}} onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}/>
                <img className='img-fluid' src={preview?preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75ebrwvgVW5Ks_oLfCbG8Httf3_9g-Ynl_Q&usqp=CAU" }alt="project picture" />
                </label>
                
              
            </div>
            <div className="col-lg-6">
              <div className='mb-3'>  <input type="text" className="form-control" value={projectDetails.title} onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})} placeholder='project-title' /></div>
               <div className='mb-3'> <input type="text" className="form-control"placeholder='Language used'value={projectDetails.languages} onChange={(e)=>setProjectDetails({...projectDetails,languages:e.target.value})} /></div>
               <div className='mb-3'> <input type="text" className="form-control" placeholder='Github link' value={projectDetails.github} onChange={(e)=>setProjectDetails({...projectDetails,github:e.target.value})} /></div>
               <div className='mb-3'>
                    <input type="text" className="form-control" placeholder='website link' value={projectDetails.website} onChange={(e)=>setProjectDetails({...projectDetails,website:e.target.value})} />
                </div>
                <div className='mb-3'>
                    <input type="text" className="form-control" value={projectDetails.overview} onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})} placeholder='Project overview' />
                </div>
               </div>
        </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="primary" onClick={handleAdd}>
        Save
      </Button>
    </Modal.Footer>
  </Modal>
  <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
        />
  </div>
  )
}

export default AddProject
