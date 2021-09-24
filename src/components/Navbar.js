import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
// import ReactPlayer from 'react-player';

import './Navbar.css';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <=960){
            setButton(false);
        }
        else {
            setButton(true);
        }
    };

    useEffect(() => { showButton()},[])

    window.addEventListener('resize',showButton);
    return (
       <>
       <nav className="navbar">
        <div className="navbar-container">
        <Link to="/" className="navbar-logo"  onClick = {closeMobileMenu}>
            ProBros <i className="fab fa-typo3"></i>

               </Link>
               <div className="menu-icon" onClick={handleClick}>
                   <i className={click ? 'fas fa-times': 'fas fa-bars'}></i>
               </div>
               <ul className={click ? 'nav-menu active':  'nav-menu'}>
                   <li className='nav-item'>
                       <Link to= '/' className='nav-links' onClick={closeMobileMenu}>
                           Home
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to= '/pubgmobile' className='nav-links' onClick={closeMobileMenu}>
                           Pubg Mobile
                          
                       </Link>
                   </li>
                   
                   <li className='nav-item'>
                       <Link to= '/forza' className='nav-links' onClick={closeMobileMenu}>
                           Forza
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to= '/csgo' className='nav-links-mobile' onClick={closeMobileMenu}>
                           CSGO
                       </Link>
                   </li> 
               </ul>
               {button && <Button buttonStyle='btn--outline'>CSGO</Button>}
        
        </div>
                 </nav>
        

       </>

    );
}

export default Navbar
