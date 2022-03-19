import React from 'react';
import cl from "../../components/ItemList/ItemList.module.scss";
import Item from "../../components/item/Item";

const HomePage = ({ items, openModal }) => {
    return (
        <div>
            <div className={cl.gridSection}>
                {items.map((e) => <Item openModal={openModal} key={e.id} color={e.color} name={e.name} article={e.article} image={e.image} price={e.price} isFavorite={e.isFavorite} />)}
            </div>
        </div>
    );
};

export default HomePage;