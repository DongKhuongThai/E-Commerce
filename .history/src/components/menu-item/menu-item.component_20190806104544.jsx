import React from 'react';
import './menu-item.styles.css';

const MenuItem = ({title, imageUrl}) => {
    return (
        <div style={{
            backgroundColor:red
        }} className="menu-item">
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">{imageUrl}</span>
            </div>
        </div>
    );
}
export default MenuItem;