import React from 'react';
import './shoppage.styles.css';
import SHOP_DATA from './shoppage';
class ShopPage extends React.Component {
   constructor(props){
      super(props);
      this.state={
         collections : SHOP_DATA
      }
   }
   render(){
      const {collections} = this.state;
      return (
         <div className="shop-page">
            {}
         </div>
      );
   }
}
export default ShopPage;