import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import {Context} from "./index";
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import NewsCards from './components/NewsCards';
//import { BrowserRouter as Router, Route, redirect, Switch } from 'react-router-dom';

const App = observer(() => {
    const {user} = useContext(Context)
    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;