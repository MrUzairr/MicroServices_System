import React, { useState } from 'react';
import { FiUser, FiLogIn, FiUserPlus } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const AccountComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = JSON.parse(localStorage.getItem('currentUser'));
  function logout(){
    localStorage.removeItem('currentUser');
    window.location.href = '/login'
  }
  const [isToggled, setIsToggled] = useState(false);
  const toggleBtn = () =>{
    setIsToggled(!isToggled);
  }

  return (
    <>
      <a href="#" className='nav-functions nav-account' onClick={handleShow}>
        <FiUser className="nav-body-functions-icons" />
        <span>Account</span>
      </a>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="offcanvas-title">Welcome!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="account-body">
        {user ? (<>
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" onClick={toggleBtn} aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faUser} className="nav-icon" />
                     {user.username}
                  </button>
                  {isToggled && (<div class="dropdown-menu mt-2" style={{display:'block'}} aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="/profile">Profile</a>
                    <a class="dropdown-item" href="#" onClick={logout}>Logout</a>
                  </div>
                )}
                </div>
              </>) :
                (
          <div className="user-actions">
            <a href="/login">
              <FiLogIn className="action-icon" />
              <span>Login</span>
            </a>
            <a href="/signup">
              <FiUserPlus className="action-icon" />
              <span>Signup</span>
            </a>
          </div>
          )}

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AccountComponent;
