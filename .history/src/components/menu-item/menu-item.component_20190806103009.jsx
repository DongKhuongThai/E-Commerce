import React from 'react';
import './menu-item.styles.css';

const MenuItem = ({title}) => {
    return (
        <div className="menu-item">
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">d</span>
            </div>
        </div>
    );
}
export default MenuItem;