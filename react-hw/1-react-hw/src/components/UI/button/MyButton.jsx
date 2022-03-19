import React, {Component} from 'react';
import cl from './MyButton.module.scss'

class MyButton extends Component {

    render() {
        const { backgroundColor, text, onClick } = this.props
        return (
            <button className={cl.MyButton} style={{backgroundColor}} onClick={onClick}>
                {text}
            </button>
        );
    }

}

export default MyButton;