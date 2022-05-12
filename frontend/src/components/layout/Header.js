import React from 'react';
import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return(
        <header>
        <div className="holder">
            <div className="header">
                <img src="images/header/river.png" alt="logo" />
                <h1>Riverpedia</h1>
            </div>
        </div>
    </header>
    );
}

export default Header;