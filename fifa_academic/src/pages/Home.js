/* React  */
import {useContext, useEffect, useState} from "react";

/* Router */
import { useHistory } from "react-router";

/* Context */
import { FifaContext } from "./contexts/FifaContext";

import logo from '../logo.svg';

/* Controller  */
import useHomeController from "./controllers/HomeController";

/* View */
const Home = () => {

    const {
        fifa, 
        setFifa
    } = useContext(FifaContext);

    const {
        handleFunction
    } = useHomeController();

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
        </div>
    )
}

export default Home;