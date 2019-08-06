import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg'
const Header = () => {
   return (
      <div className  ='header'>
         <Link className = 'logo-container' to='/'></Link>
      </div>
   );
}


export default Header;