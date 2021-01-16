import React from 'react';
import Banner from './Components/Banner';
import NavBar from './Components/Header/NavBar';
import SearchBar from './Components/SearchBar';
import './styles/App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HouseListingForm from './Components/HouseListingForm';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/list-your-property'>
                    <HouseListingForm />
                </Route>
                <Route path='/'>
                    <NavBar />
                    <SearchBar />
                    <Banner />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;