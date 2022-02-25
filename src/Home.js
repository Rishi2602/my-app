import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import './App.css';
import { Carousel, Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './image/Bg1.jpg';
import img2 from './image/Bg2.jpg';
import img3 from './image/Bg3.jpg';
import img4 from './image/ig.jpg';
import img5 from './image/ig2.jpg';
import img6 from './image/ig4.jpg';






const Home = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [displayEmail, setDisplayEmail] = useState('');
  const [displayPhone, setDisplayPhone] = useState('');

  const handleClose = () => setShow(false);

  function handleSubmit (e){
    e.preventDefault();
    setShow(true);
    setDisplayEmail(email);
    setDisplayPhone(phone);
  }

  return (
    <div>
      <div className='heading'>
        <h3 className='hprimary '>
          <em>HI, MY NAME IS <span>RISHI MARODIA</span></em></h3>
      </div>


      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={img3}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={img1}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>


      <section id="column">
        <div className="container-fluid">
          <div className="row">
            <div className="box col-lg-4 col-md-6 col-sm-6">
              <div className="card box-inside">
                <img className="box-image" src={img4} alt="Photo-1" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.</p>
              </div>
            </div>

            <div className="box col-lg-4 col-md-6 col-sm-6">
              <div className="card box-inside">
                <img className="box-image" src={img5} alt="Photo-1" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.</p>
              </div>
            </div>

            <div className="box col-lg-4 col-md-6 mx-auto col-sm-6">
              <div className="card box-inside">
                <img className="box-image" src={img6} alt="Photo-1" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <form className="form-control" name="myForm">
        <div className="whole">
          <div className="form-box" data-aos="fade-right">
            <label>Email:</label>
            <input type="email" name="emailValue" placeholder="  Enter the Email " required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <br />
          <div className="form-box" data-aos="fade-left">
            <label>Contact:</label>
            <input type="number" name="contactValue" placeholder="  Enter the Contact No " required onChange={(e) => setPhone(e.target.value)} />
          </div>
        </div>
        <Button type='submit' className="btn sub-button btn-md btn-primary" id="butn"  variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
      <div className="outbox">
      <div id="emailArea" className="out-box">
        <label>Output:</label>
        <input type="email" id="Emai" value={displayEmail}  />
        </div>
      
       <div id="contactArea" className="out-box">
        <label>Output:</label> 
        <input type="number" id="Cont" value={displayPhone}/>
       </div>
    </div>
  
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        <Modal.Title className='modal-head'>Response Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thanks for your submission<br/>We will reach out soon</Modal.Body>
        </Modal>
    </div >
  )
}

export default Home;