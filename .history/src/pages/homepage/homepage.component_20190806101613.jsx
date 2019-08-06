import React from 'react';
import './homepage.styles.css';
import MenuItem from '../../components/menu-item/menu-item.component';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <MenuItem title="Hat" subtitle="description"></MenuItem>
                <MenuItem title="Hat" subtitle="description"></MenuItem>
                <MenuItem title="Hat" subtitle="description"></MenuItem>
            </div>
        </div>
    );
}
export default HomePage;