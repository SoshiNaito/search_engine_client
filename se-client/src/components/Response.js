import React, { Component } from 'react';
import testJson from './test.json';

var getUrl ="http://localhost:8000/";

export default class Response extends Component {

    constructor(props){
        super(props);
        this.state={
            res:[],
        }
    };

    componentWillMount(){
        this.sendText();
    }


    sendText(){             //送信   
        fetch(getUrl+this.props.location.state.text,{mode:"no-cors"})
        .then((response)=>response.text())        //Jsonファイルのレスポンスを受け取り       
        .then((text)=>{                 //レスポンス受け取った後の処理
            console.log("testjsonCommit"+text)
            this.setState({
             res:testJson          //テスト用データを格納
            })    
            console.log(this.state.res)
        })

        .then((response)=>response.json())        //Jsonファイルのレスポンスを受け取り
        .then((responseJson) => {
            console.log("Commit")
            this.setState({
              res: responseJson,
              loading:true
            });
            console.log("Commit")
        
        })
    
        .catch((error)=>console.log(error))
    }

    ResponsePreview(){
        console.log(this.state.res);
        return(
            <ul>
            {this.state.res.map((Dlist)=>{ 
                return(                                
                    <li className='Return-item'>
                    <a href={Dlist.url}  className='Returnlist'>{Dlist.title}</a>        
                    </li>
                )
            })                
            }
            </ul>
        ) 
    }


  render(){
      let ResponseList=this.ResponsePreview();
      return(
          <div>
          {ResponseList}
          </div>
      )
  }  
}

