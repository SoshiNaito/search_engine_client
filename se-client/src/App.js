import React from 'react';
import './App.scss';
import Main from './main';
import FavoriteContent from './FavoriteContent';
import Menu from './components/Menu';
import Form from './components/Form';
import Button from './components/Button';
import SerchForm from './components/SerchForm';
import PostForm from './components/PostForm';

class App extends  React.Component{
    render(){
        return(
            <div className="App">
                <SerchForm/>
                <PostForm/>
            	<Form />

            </div>
        )
    }
}

export default App;
