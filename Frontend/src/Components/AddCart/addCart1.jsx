import React,{useState} from "react";
import Navbar from "../navbar";
import Footer from "../Footer/index";
import Loader from "../Loader/index"; // Make sure to import or create a Loader component
import Error from "../Error/index";
import { FaArrowRight } from "react-icons/fa";
import "./index.css";

import {Modal,Button,Carousel} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function AddCart1(props) {
  
  const { id ,image, title, price, description,rating } =
  (props.location.state || {});

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={image}
              style={{
                height: "500px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
              alt="cartImage"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2>{title}</h2>
            <h3>${price}</h3>
            <p>{description}</p>
            <div style={{float:'right'}}>
              <Link to={`/order1/${id}`}>
              <button className='btn btn-primary m-2'>Book Now</button>
            </Link>
                <button className='btn btn-primary m-2' onClick={handleShow}>View Details</button>
            </div>
            <p className="rating">Rating: {rating}</p>
          </div>
          <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel>
            <Carousel.Item>
              <img className='d-block w-100 bigimg' src={image} alt="product image" />
            </Carousel.Item>
    </Carousel>
    <p>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
      </div>
      <Footer />
    </div>
  );
}
