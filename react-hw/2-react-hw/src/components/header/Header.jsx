import React from 'react';
import classes from './Header.module.scss'
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.box}>
                <h1 className={classes.title}>My Shop</h1>
                <ul className={classes.menu}>
                    <li className={classes.menuItem}><NavLink exact activeClassName={classes.active} to="/">Main</NavLink></li>
                    <li className={classes.menuItem}><NavLink activeClassName={classes.active} to="/cart">Cart</NavLink></li>
                    <li className={classes.menuItem}><NavLink activeClassName={classes.active} to="/favorite">Favorite</NavLink></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;