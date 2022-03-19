import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import FavoritePage from "../pages/FavoritePage";

const Routes = ({items, openModal, cart }) => {
    return (
        <Switch>
            <Route exact path='/'>
                <HomePage items={items} openModal={openModal}/>
            </Route>

            <Route exact path='/cart'>
                <CartPage cart={cart} openModal={openModal}/>
            </Route>

            <Route exact path='/favorite'>
                <FavoritePage/>
            </Route>
        </Switch>
    );
};

export default Routes;