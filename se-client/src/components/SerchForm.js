//空白変換、GET同ファイルでの動作確認済み　
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
var getUrl ="http://localhost:8000/";
    


class SerchForm extends  Component{

    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this)

        this.state={
            text:'',                //入力文字の表示
            serchText:'',           //変換後
        };
        this.handleTextChange=this.handleTextChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)   
    
    }

    componentWillMount(){
        this.GetfetchResponse();

    }

    GetfetchResponse(){                              //GET通信確認
        fetch(getUrl+'conectTest',{mode:"no-cors"})
        .then((response)=>response.text())
        .then((text)=>{console.log("responseText:"+text)})
        .catch((error)=>console.log(error))
    }

    handleSubmit(){                 //ボタン押下

        let sendText='/'+this.state.serchText;
        this.props.history.push({
          pathname: sendText,
          state: { text: this.state.serchText }
      });
    
    }


    handleTextChange(event){        //入力の表示,空白の変換

        let inputValue=event.target.value;
        const isEmpty=inputValue==="";

        let nones ='?q='+inputValue.trim();
        nones=nones.replace(/\s+/g,"+");
        
        this.setState({
            text:inputValue,
            serchText:nones,
        })
    }

   
    render(){
        const FormStyle=(
            <form onSubmit={()=>{this.handleSubmit()}}>
            <input id="fakebox-input" autocomplete="off" tabindex="-1"
            type="text" aria-hidden="true" value={this.state.text}
            onChange={(event)=>{this.handleTextChange(event)}}/>
            <input type="submit" />
            </form>
        )
        
        let textForm=FormStyle;

        return(
            <div>
                <p>GETFORM</p>
               {textForm}

            </div>

        );
    }
}

export default withRouter(SerchForm);
