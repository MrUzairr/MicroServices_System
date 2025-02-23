import React, { useState } from "react";
import {
  AiFillCaretDown,
  AiOutlineHeart,
  AiFillPhone,
  AiFillRedEnvelope,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsFillBagCheckFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall, BiSearch } from "react-icons/bi";
import Example from "./offCanvas";
import AccountComponent from "./offCanvas";
import Wishlist from "./wishlist";
import LanguageSelector from "./languageSelector";
import CurrencySelector from "./currencySelector";


const Navbar = () => {

  

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const toggleDialog = () => {
    setIsDialogVisible(!isDialogVisible);
  };
  return (
    <div>
          <div className="nav-header">
            <div className="contact-info">
              <p className="nav-header-items">
                <BiSolidPhoneCall className="nav-icons" />
                <a href="https://wa.me/923254744800" style={{marginLeft:'2px'}}>+92-325-4744-800</a>
              </p>

              <p className="nav-header-items" style={{textTransform:'lowercase'}}>
                <MdEmail className="nav-icons" />
                <a href="mailto:uzairakhtar100@gmail.com" style={{marginLeft:'2px'}}>
                  uzairakhtar100@gmail.com
                </a>
              </p>
            </div>
            <div className="main-headline">
              <p className="nav-header-freeLine">
                free shipping for order above $200. shop now!
              </p>
            </div>
            <div className="contact-info">
              <p className="nav-header-items" >
                <FaLocationDot className="nav-icons" style={{marginRight:'2px'}} /> Q hall UET Lahore,
                Punjab 23520
              </p>
             <LanguageSelector/>
             <CurrencySelector/>
            </div>
          </div>
          <div className="nav-body">
            <div className="nav-body-tabs">
              <a href="/">Home</a>
              <a href="/collection">Collections</a>
              <a href="/all-products">Products</a>
              <a href="python-data">Other Pages</a>
            </div>
            <div className="nav-body-logo">
              <a href="#">coolmate</a>
            </div>
            <div className="nav-body-functions">
              {!isSearchVisible && (
                <a href="#" onClick={toggleSearch} className="nav-functions">
                  <BiSearch className="nav-body-functions-icons" /> Search
                </a>
              )}
              {isSearchVisible && (
                <a className="nav-functions">
                  <input
                    className="search-bar"
                    type="text"
                    placeholder="Type your search..."
                  />
                  <BiSearch
                    onClick={toggleSearch}
                    style={{ marginLeft: "5px", cursor: "pointer" }}
                    className="nav-body-functions-icons"
                  />
                </a>
              )}
              <a>
                <AccountComponent />
              </a>
              <a href="#" className="nav-functions">
                <AiOutlineHeart className="nav-body-functions-icons" /> Wishlist
              </a>
              <a href="#" className="nav-functions">
                <AiOutlineShoppingCart className="nav-body-functions-icons" />{" "}
                Cart
              </a>
            </div>
            <div className="navbaricon"> 
              <FaBars/>
            </div>
          </div>

    </div>
  );
};
export default Navbar;
