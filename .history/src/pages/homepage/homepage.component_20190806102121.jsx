import React from 'react';
import './homepage.styles.css';
import MenuItem from '../../components/menu-item/menu-item.component';
import Directory from '../../components/directory/directory.component';

const HomePage = () => {
    return (
        <div className="homepage">
            <Directory></Directory>
        </div>
    );
}
export default HomePage;