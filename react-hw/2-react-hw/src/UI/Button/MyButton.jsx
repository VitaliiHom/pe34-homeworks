import React from 'react';
import cl from './MyButton.module.scss'

const MyButton = ({ backgroundColor, text, onClick }) => {
    return (
        <button className={cl.MyButton} style={{backgroundColor}} onClick={onClick}>
            {text}
        </button>
    );
};

export default MyButton;