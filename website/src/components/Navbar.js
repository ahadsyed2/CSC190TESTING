import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';



const Navbar = () => {

    const { logout } = useLogout()
    const { user } = useAuthContext()
    const handleClick = () => {
        logout() 
    }



return(
    <IconContext.Provider value= {{color: '#fff'}}>
        <div className='navbar'>
        

        <div className="logo">
          <img src="https://www.clker.com/cliparts/u/O/L/Q/c/m/car-icon-hi.png" alt="Logo" />
        </div>

        <div className="top-rightbox">
          <div className='Post'>
              <ul>
                <li>
                <Link to="/Posting">+ Create a Listing
                </Link>
                </li>
              </ul>
          </div>

            {!user && (
              <div className="Login">
                <ul>
                  <li>
                  <Link to="/Login"><FontAwesomeIcon icon={faUser} className="user-icon" /> Login
                  </Link>
                  </li>
                </ul>
              </div> 
            )}

            {!user && (
            <div className="SignUp">
              <ul>
                <li>
                <Link to="/Signup"><FontAwesomeIcon icon={faUser} className="user-icon" /> Sign Up
                </Link>
                </li>
              </ul>
            </div> 
            )}

            {user && (
            <div>
              <span>{user.email}</span>
              <button className = "container" onClick = {handleClick}>Logout</button>
            </div> )}

          </div>
      </div>
      </IconContext.Provider>
    )
};

export default Navbar