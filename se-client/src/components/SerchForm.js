//空白変換、GET同ファイルでの動作確認済み　


import React from 'react';
//import Logopic from './pic/logo.jpg';



var url ="http://localhost:8000/";

class SerchForm extends  React.Component{

   

    constructor(props){
        super(props);
        
    
        this.state={
            isSubmitted:false,
            text:'',
            serchText:'',

        };
    }   

    componentWillMount(){
        this.fetchResponse();
    }

    fetchResponse(){
        fetch(url)
        .then((response)=>{
            if(response.ok){
                return response.text();
            }else{
                throw new Error();
            }
        })
        .then((text)=>console.log(text))
        .catch((error)=>console.log(error));
            
    }


    sendText(){             //送信
        
        fetch(url+this.state.serchText,{
            method:'GET',
        })
        .catch((error)=>console.log(error));

    }


    handleSubmit(){                 //ボタン押下
        
        this.sendText();
        this.setState({isSubmitted:true});
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
        const Logo=(
            <div className="log">

            </div>
            )

        let textForm;

        if(this.state.isSubmitted&&this.state.text!=""){
            textForm=(
                <p>送信完了</p>
            )
            
            
            }else{
                textForm=(
                    <form onSubmit={()=>{this.handleSubmit()}}>
                    <input id="fakebox-input" autocomplete="off" tabindex="-1"
                    type="text" aria-hidden="true" value={this.state.text}
                    onChange={(event)=>{this.handleTextChange(event)}}/>
                    <input type="submit" />
                    </form>
                )
        }



        return(
            <div>
                {Logo}
                {textForm}


            </div>

        );
    }
}

export default SerchForm;
