import React from 'react';
import './homepage.styles'

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Title</h1>
                        <span className="subtitle">description</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Title2</h1>
                        <span className="subtitle">description2</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Title3</h1>
                        <span className="subtitle">description3</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePage;