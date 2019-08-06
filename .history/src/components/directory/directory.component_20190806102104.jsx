import React from 'react';
import './homepage.styles.css';
import MenuItem from '../../components/menu-item/menu-item.component';

class Directory extends React.Component {
    render(){
        return (
            <div className="directory-menu">
                <MenuItem title="Hat" subtitle="description"></MenuItem>
                <MenuItem title="Hat" subtitle="description"></MenuItem>
                <MenuItem title="Hat" subtitle="description"></MenuItem>
            </div>
        );
    }
}
export default Directory;