import React from 'react';
import classes from './Item.module.scss'
import { Button } from "@mui/material";

const Item = ({image, name, price, color, article, openModal, isFavorite}) => {
    return (
        <div className={classes.cards}>
            <img alt='image' src={image} className={classes.img}/>
            <div>
                <h3>{name}</h3>
                <span>{article}</span>
                <span>{color}</span>
            </div>
            <span>{price}</span>
            <Button variant="contained" onClick={() => openModal(name)}>Add to card</Button>
        </div>
    );
};

export default Item;