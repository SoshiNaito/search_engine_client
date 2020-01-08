//空白変換、GET同ファイルでの動作確認済み　
import ReturnList from './ReturnList';
import testJson from './test.json';
import React from 'react';


var getUrl ="http://localhost:8000/";


class main extends  React.Component{

   

    constructor(props){
        super(props);
        
    
        this.state={
            isSubmitted:false,          //入力されたか 
            text:'',                //入力文字の表示
            serchText:'',           //変換後
            res:[],
            loading:false
        };
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

    sendText(){             //送信   
        fetch(getUrl+this.state.serchText,{mode:"no-cors"})
        .then((response)=>response.text())        //Jsonファイルのレスポンスを受け取り       
        .then((text)=>{                 //レスポンス受け取った後の処理
            console.log("GetConectCommit"+text)
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
    
        // .then((jsonData)=>{                         //Jsonファイルに対する処理
        //     console.log("取得")
        //     this.setState({
        //         res:[1]
        //     })
        // })
        .catch((error)=>console.log(error))

    }

    ResponsePreview(){
        console.log(this.state.res);
        return(
            <ReturnList
                PreviewList={this.state.res}/>
            ) 
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
        

        let textForm;

        if(this.state.isSubmitted&&this.state.text!==""){
            textForm=(
                this.ResponsePreview()    
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
                <p>GETFORM</p>
               {textForm}


            </div>

        );
    }
}

export default main;
