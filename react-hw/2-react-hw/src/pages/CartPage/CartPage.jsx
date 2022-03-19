import React from 'react';
import CardItem from "../../components/CardItem";

const CartPage = ({ cart, openModal }) => {
    return (
         <>
            <h1>CART</h1>
             <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                 {cart.map(element =>{
                     return <CardItem openModal={openModal} count={element.count} name={element.name}/>
                 })}
             </div>
         </>
    );
};

export default CartPage;