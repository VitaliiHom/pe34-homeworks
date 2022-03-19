import React, {Component} from "react";
import MyButton from "./components/UI/button/MyButton";
import Modal from "./components/UI/modal/Modal";



class App extends Component {
    state = {
        firstModal: false,
        secondModal: false,
    }

    openFirst = () => {
        this.setState({firstModal: true})
    }

    openSecond = () => {
        this.setState({secondModal: true})
    }

    closeFirst = ()=> {
        this.setState({firstModal: false})
    }

    closeSecond = ()=> {
        this.setState({secondModal: false})
    }

    render() {

        const { firstModal, secondModal } = this.state

        return (
            <div className="App" onClick={event => event.stopPropagation()}>
                <MyButton text={'Open first Modal'} onClick={this.openFirst} backgroundColor='red'/>
                {firstModal && <Modal
                    ModalBox={{backgroundColor: 'red', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                    closeModal={this.closeFirst}
                        active={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
                    header='Do you want to delete this file?'
                    text='Once you delete this file, it won’t be possible to undo this action.
                            Are you sure you want to delete it?'
                    firstBtn='OK'
                    secondBtn='Cancel'
                />}
                <MyButton text={'Open second Modal'} onClick={this.openSecond} backgroundColor='blue'/>
                {secondModal && <Modal
                    ModalBox={{backgroundColor: 'blue', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                    closeModal={this.closeSecond}
                    active={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
                    header='Why did you press this button?'
                    text='Dont press this button again please'
                    firstBtn='OK'
                    secondBtn='Cancel'
                />}
            </div>
        );
    }

}

export default App;
