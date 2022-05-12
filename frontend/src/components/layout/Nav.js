import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div>
            <nav>
                <div className="holder">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/noticias">Noticias</Link></li>
                        <li><Link to="/partidos">Partidos</Link></li>
                        <li><Link to="/traspasos">Traspasos</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;