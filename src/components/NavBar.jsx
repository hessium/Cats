import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <header className='main-header'>
            <div className='navbar'>
                <div className="navbar__links">
                    <Link to="/">Все котики</Link>
                    <Link to="/favorite">Любимые котики</Link>
                </div>
            </div>
        </header>
    );
};

export default NavBar;