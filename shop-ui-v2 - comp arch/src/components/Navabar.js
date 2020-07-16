import React from 'react';

const Navabar = (props) => {
    let { title } = props
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">{title}</span>
            </nav>
        </div>
    );
};

export default Navabar;
