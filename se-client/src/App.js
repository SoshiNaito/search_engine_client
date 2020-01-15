import React from 'react';
import './App.scss';
import SerchForm from './components/SerchForm';
import ResViw from './components/Response';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


class App extends  React.Component{
    render(){
        return(
            <BrowserRouter>
            <div className="App">
            <Switch>
             <Route exact path={"/"} component={SerchForm}/>
             <Route path={'/:id'} component={ResViw}/>
            </Switch>
            </div>
            </BrowserRouter>
            
        )
    }
}

export default App;
