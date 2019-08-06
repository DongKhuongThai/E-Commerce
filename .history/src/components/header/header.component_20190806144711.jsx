import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css';
const Header = () => {
   return (
      <div className  ='header'>
         <Link className = 'logo-container' to='/'>
            HOME
         </Link>
         <div className = 'options'>
            <Link className='option' to ='/shop'>SHOP</Link>
            <Link className='option' to ='/contact'>CONTACT</Link>
         </div>
      </div>
   );
}


export default Header;