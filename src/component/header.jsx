import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebardata';
import "./style.css"
import { IconContext } from 'react-icons';
import {Circle} from 'react-bootstrap-icons'

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return <>
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#"><FaIcons.FaBars onClick={showSidebar} /></Navbar.Brand>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>

                <Circle/>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
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
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button className="mr-sm-2-button" variant="btn btn-square btn-secondary">Search</Button>
      </Form>
      <Button className="login-button" variant="btn btn-pill btn-info">Login</Button>
    </Navbar>
  </>
}

export default Header;
