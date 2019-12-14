import React from 'react';
import './App.scss';
import Main from './main';
import FavoriteContent from './FavoriteContent';
import Menu from './components/Menu';
import Form from './components/Form';
import Button from './components/Button';
import aj from './testAj';
import SerchForm from './components/SerchForm';
import PostForm from './components/PostForm';
import ReturnList from './components/ReturnList';


class App extends  React.Component{
    render(){
        return(
            <div className="App">
            	<Form />
            	<Button />
                <Menu/>
                <SerchForm />
                <PostForm/>

                <ReturnList/>
            </div>
        )
    }
}

export default App;
