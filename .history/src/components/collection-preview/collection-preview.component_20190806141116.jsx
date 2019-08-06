import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => {
   return (
      <div className='collection-preview'>
         <h1 className='title'>{title}</h1>
         <div className='preview'>
            {items.map(item => (
               <CollectionItem key={item.id}/>
            ))}
         </div>
      </div>
   );
}

export default CollectionPreview;