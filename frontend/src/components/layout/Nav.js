import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
    return (
        <div>
            <nav>
                <div className="holder">
                    <ul>
                        <li><NavLink activeClassName='activo' exact to="/">Home</NavLink></li>
                        <li><NavLink activeClassName='activo' exact to="/noticias">Noticias</NavLink></li>
                        <li><NavLink activeClassName='activo' exact to="/partidos">Partidos</NavLink></li>
                        <li><NavLink activeClassName='activo' exact to="/traspasos">Traspasos</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;