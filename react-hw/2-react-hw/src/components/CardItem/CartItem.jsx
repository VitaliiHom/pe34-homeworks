import React from 'react';
import styles from './CartItem.module.scss';
import { Button } from "@mui/material";


const CartItem = ({ name, count, color, openModal }) => {
    return (
        <div className={styles.countItem}>
            <div className={styles.wrapper}>
                <div style={{ backgroundColor: `${color}` }} />
                <span>{name}</span>
            </div>

            <div className={styles.wrapper}>
                <span>{count}</span>
                <Button variant="contained" color='error' onClick={() => openModal(name, 'delete')}>Delete</Button>
            </div>
        </div>
    )
}

export default CartItem;