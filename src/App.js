import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Catalogue from './pages/catalogue/catalogue'
import Home from './pages/home/home'
import Product from './pages/product/product'

class App extends Component{
    render(){
        return (
            <div className="App">
            <Router>
                <div>
                <Route exact path="/home" render={(props)=>(<Home/>)}/>
                <Route path="/product" render={(props)=>(<Product/>)}/>
                <Route path="/catalogue" render={(props)=>(<Catalogue/>)}/>
                </div>
            </Router>
            </div>
        );
    }
}

export default App;
