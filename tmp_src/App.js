import React from 'react';
import './App.scss';
import Menu from './components/Menu';
import Form from './components/Form';
import Button from './components/Button';
import SerchForm from './components/SerchForm';
import PostForm from './components/PostForm';
import ReturnList from './components/ReturnList';
import MenuBlock from "./components/MenuBlock";

import {library} from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import {fab} from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import {fas} from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import {far} from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート
library.add(fab, fas, far); //他のコンポーネントから簡単に呼び出せるようにするための登録処理？

class App extends  React.Component{
    render(){
        return(
            <div className="App">
                <Form />
            </div>
        )
    }
}

export default App;
