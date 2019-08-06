import React from 'react';
import './collection-item.component';

class CollectionItem extends React.Component {
   constructor(props){
      super(props);
   }
   render(){
      return (
         <div className="collection-item">
            <div className='image' style={{backgroundImage:`url(${})`}}>
            
            </div>
         </div>
      );
   }
}
export default CollectionItem;