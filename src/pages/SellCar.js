import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { hamburgerMenu } from './hamburgerMenu';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function SellCar() {
  const [sidebar, setSidebar] = useState(false) 
  /*setSidebar=update*/ /*false means the current value is not showing*/
  const showSidebar = () =>  setSidebar(!sidebar)
  /* utilize set side bar and this is going to update the value to whatever the opposite of it is currently*/
  /*(!sidebar) it's reversing the value true/false*/

  return (
      <>
      <IconContext.Provider value= {{color: '#fff'}}>
          <div className='navbar'>
            <Link to="#" className='hamburger-bars'>
                <FaBars onClick={showSidebar} />
            </Link>

            <div className="logo">
                <img src="https://www.clker.com/cliparts/u/O/L/Q/c/m/car-icon-hi.png" alt="Logo" />
            </div>

            <div className="top-rightbox">
                <div id="Login">
                  <ul>
                    <li>
                    <Link to="/Login"><FontAwesomeIcon icon={faUser} className="user-icon" /> Login
                    </Link>
                    </li>
                  </ul>
                </div>
                <div id="SignUp">
                  <ul>
                    <li>
                    <Link to="/Signup"><FontAwesomeIcon icon={faUser} className="user-icon" /> Sign Up
                    </Link>
                    </li>
                  </ul>
                </div>
              </div>
          </div>
          
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className='hamburger-bars'>
                        <AiOutlineClose />
                    </Link>
                </li>
                {hamburgerMenu.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
          </nav>
          </IconContext.Provider>


        <div className='sellCar'>
          <h1>Sell you car</h1>
        </div>

      </>
  )
}

export default SellCar
