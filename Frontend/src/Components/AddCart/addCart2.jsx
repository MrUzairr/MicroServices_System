import React,{useState} from "react";
import Navbar from "../navbar";
import Footer from "../Footer/index";
import Loader from "../Loader/index"; // Make sure to import or create a Loader component
import Error from "../Error/index";
import { FaArrowRight } from "react-icons/fa";
import "./index.css";

import {Modal,Button,Carousel} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function AddCart2(props) {
  
  const { id , author, title, year_published, price} =
  (props.location.state || {});

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          {/* <div className="col-md-6">
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
          </div> */}
          <div className="col-md-6">
            <h2>{title}</h2>
            <h2>{author}</h2>
            <h3>${price}</h3>
            <p>{year_published}</p>
            <div style={{float:'right'}}>
              <Link to={`/order2/${id}`}>
              <button className='btn btn-primary m-2'>Book Now</button>
            </Link>
                <button className='btn btn-primary m-2' onClick={handleShow}>View Details</button>
            </div>
            {/* <p className="rating">Rating: {rating}</p> */}
          </div>
          <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel>
            <Carousel.Item>
              <img className='d-block w-100 bigimg' src='https://www.google.com/imgres?q=books&imgurl=https%3A%2F%2Fi.tribune.com.pk%2Fmedia%2Fimages%2F1879511-books-1546382724%2F1879511-books-1546382724.jpg&imgrefurl=https%3A%2F%2Ftribune.com.pk%2Fstory%2F1879511%2F1-32m-books-distributed-schools-february-lehri&docid=13KLbLF1Vsi6oM&tbnid=Q1Pg4gaAhaghmM&vet=12ahUKEwj-j63bpPiFAxUJR2cHHQu5DtEQM3oECBkQAA..i&w=1680&h=1050&hcb=2&ved=2ahUKEwj-j63bpPiFAxUJR2cHHQu5DtEQM3oECBkQAA' alt="product image" />
            </Carousel.Item>
    </Carousel>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
