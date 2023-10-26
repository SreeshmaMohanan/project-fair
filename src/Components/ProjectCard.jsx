import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'

function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img onClick={handleShow} variant="top" src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" />
                <Card.Body>
                    <Card.Title className='text-center'>Card Title</Card.Title>


                </Card.Body>
            </Card>

            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <img src="https://media.tenor.com/TaG2lLTMu5YAAAAC/gears.gif" height={'200px'} alt="" />

                        </Col>
                        <Col>
                            <h2>Project Title</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia sequi explicabo enim officiis placeat tempora voluptate, debitis ex aspernatur officia, reiciendis distinctio! Quod reprehenderit perferendis ducimus? Sint quis voluptate tempore.</p>

                        </Col>
                    </Row>
                    <div>
                        <a href="https://github.com/SreeshmaMohanan/vedioapp" target='_blank'><i class="fa-brands fa-github me-5 fa-2x"></i></a>
                        <a href="https://fascinating-bavarois-bfadbd.netlify.app" target='_blank'><i class="fa-solid fa-link fa-2x"></i></a>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default ProjectCard