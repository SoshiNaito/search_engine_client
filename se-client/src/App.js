import React from 'react';
import './App.scss';
import Main from './main';
import FavoriteContent from './FavoriteContent';
import Menu from './Menu';
import aj from './testAj';


class App extends  React.Component{


    render(){
        return(
            <div className="App">
                
            
                <Menu/>
                <Main/> 
               <FavoriteContent />




            </div>

        )
    }
}

export default App;
