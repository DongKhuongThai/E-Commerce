import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg'
const Header = () => {
   return (
      <div className  ='header'>
         <Link className = 'logo-container' to='/'>
            <Logo className = 'logo' />
         </Link>
         <div className = 'options'>
            <Link className='option' to ='/shop'>SHOP</Link>
            <Link className='option' to ='/contact'>contact</Link>
         </div>
      </div>
   );
}


export default Header;