import React, {Component} from 'react';
import cl from './Modal.module.scss'
import MyButton from "../button/MyButton";


class Modal extends Component{

    render() {
        const { header, closeModal, text, firstBtn, secondBtn, active, ModalBox, headerBackground } = this.props

        return (
            <div className={cl.Modal} style={active} onClick={e => (e.currentTarget === e.target) && closeModal()}>
                <div style={ModalBox} className={cl.ModalBox}>
                    <div className={cl.ModalHeader} style={headerBackground}>
                        <h2>{header}</h2>
                        <span onClick={closeModal}>X</span>
                    </div>
                    <div className={cl.text}>{text}</div>
                    <footer>
                        <MyButton text={firstBtn}/>
                        <MyButton text={secondBtn}/>
                    </footer>
                </div>
            </div>
        );
    }

}

export default Modal;