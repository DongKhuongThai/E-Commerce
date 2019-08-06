import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => {
   return (
      <div className='collection-preview'>
         <h1 className='title'>{title}</h1>
         <div className='preview'>
            {items.filter((item,idx)=> idx<4).map(({id, ...otherItemProps}) => (
               <CollectionItem key={item.id} {...otherItemProps}/>
            ))}
         </div>
      </div>
   );
}

export default CollectionPreview;