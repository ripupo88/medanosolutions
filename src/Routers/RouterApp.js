import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { HomePage } from '../Pages/HomePage';
import { PokemonPage } from '../Pages/PockemonPage';
import NavBar from '../Components/NavBar/NavBar';
import { Footer } from '../Components/footer/Footer';
import { LanguagePage } from '../Pages/LanguagePage';
import { AboutPage } from '../Pages/AboutPage';

export const RouterApp = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path='/pokemon/:pokemon'>
                    <PokemonPage />
                </Route>
                <Route exact path='/language'>
                    <LanguagePage />
                </Route>
                <Route exact path='/about'>
                    <AboutPage />
                </Route>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Redirect to='/' />
            </Switch>
            <Footer />
        </Router>
    );
};
