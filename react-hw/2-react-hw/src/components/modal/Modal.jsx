import React from 'react';
import styles from './Modal.module.scss';
import { Button } from "@mui/material";


const Modal= ({ title, actions, isOpen, setIsOpen }) => {

    if (!isOpen) return null;

    return (
        <div className={styles.root}>
            <div className={styles.background} />
            <div className={styles.content}>
                <div className={styles.closeWrapper}>
                    <Button onClick={() => setIsOpen(false)} variant="text" color="warning">Close</Button>
                </div>
                <h2>{title}</h2>
                <div className={styles.buttonContainer}>{actions}</div>
            </div>
        </div>
    );
};

export default Modal;