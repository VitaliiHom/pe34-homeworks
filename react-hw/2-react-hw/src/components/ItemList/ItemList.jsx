import React from 'react';
import Item from "../item/Item";
import cl from './ItemList.module.scss'

const ItemList = ({ items, openModal }) => {
    return (
        <section>
            <h1>Home</h1>
            <div className={cl.gridSection}>
                {items.map((e) => <Item openModal={openModal} key={e.id} color={e.color} name={e.name} article={e.article} image={e.image} price={e.price} isFavorite={e.isFavorite} />)}
            </div>
        </section>
    );
};

export default ItemList;