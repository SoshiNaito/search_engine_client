import React, { Component } from 'react';

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
        fetch(getUrl+this.props.location.state.text)

        .then((response)=>response.json())        //Jsonファイルのレスポンスを受け取り
        .then((responseJson) => {
            console.log("Commit")
            this.setState({
              res: responseJson.pages,
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
                    <p>{Dlist.degree}</p>
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

