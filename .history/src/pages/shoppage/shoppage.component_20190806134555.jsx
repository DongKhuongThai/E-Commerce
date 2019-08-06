import React from 'react';
import './shoppage.styles.css';
import './shoppage';
import SHOP_DATA from './shoppage';
class ShopPage extends React.Component {
   constructor(props){
      super(props);
      this.state={
         collections : SHOP_DATA
      }
   }
   render(){
      return (
         <div>
            
         </div>
      );
   }
}
export default ShopPage;