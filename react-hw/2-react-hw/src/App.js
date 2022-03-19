import React, {useEffect, useState} from "react";
import './App.scss';
import Header from "./components/header/Header";
import ItemList from "./components/ItemList/ItemList";
import Modal from "./components/modal/Modal";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes/Routes";
import { Button } from "@mui/material";

function App() {

    const [items, setItems] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [isAddModal, setIsAddModal] = useState(true);
    const [currentName, setCurrentName] = useState("");
    const [cart, setCart] = useState([]);

    const saveToLS = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const addToCart = (currentName) => {
        setCart(current => {
            const index = current.findIndex(({ name }) => {
                return currentName === name
            })

            if (index === -1) {
                saveToLS(JSON.stringify([...current, {name: currentName, count: 1}]));
                return [...current, {name: currentName, count: 1}]
            }

            const newState = [...current];
            newState[index].count = current[index].count + 1;
            saveToLS(JSON.stringify(newState));
            return newState;
        })

        setIsOpen(false);
    }

    const openModal = (name, type = 'add') => {
        if (type === 'delete') {
            setIsAddModal(false);
        } else {
            setIsAddModal(true);
        }
        setCurrentName(name)
        setIsOpen(true)
    }

    useEffect(() => {
        (async()=>{
            const { data } = await fetch('./items.json')
                .then(response => response.json());

            setItems(data);
        })()
    },[])


  return (
    <BrowserRouter>
        <div className="App">
          <Header/>
            {/*<ItemList items={items} openModal={openModal}/>*/}
            {/*<Modal isOpen={isOpen}*/}
            {/*       setIsOpen={setIsOpen}*/}
            {/*       />*/}
            <section>
                <Routes items={items} openModal={openModal} cart={cart}/>
                <Modal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    title={currentName}
                    actions={
                        <>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    if (isAddModal) {

                                    }
                                    addToCart(currentName)
                                }}
                            >OK</Button>


                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => setIsOpen(false)}>
                                Cancel
                            </Button>
                        </>
                    }/>
            </section>
        </div>
    </BrowserRouter>
  );
}

export default App;
