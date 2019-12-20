import React from 'react';
import ReturnList from './ReturnList';
import testJson from './test.json';
import logo from '../pic/logo.jpg';

const getUrl ="http://localhost:8000/";
 
export default class Form extends React.Component {

    constructor(props){
        super(props);    
    
        this.state={
            isSubmitted:false,          //入力されたか 
            text:'',                //入力文字の表示
            serchText:'',           //変換後
            res:[],                 //レスポンス
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
        .then(
            (response)=>response.text()        //Jsonファイルのレスポンスを受け取り
            )          
        .then((text)=>{                 //レスポンス受け取った後の処理
            console.log("GetConectCommit"+text)
            this.setState({
             res:testJson.testData          //テスト用データを格納
            })    
            console.log(this.state.res)
        })
        // .then(
        //     (response)=>response.json()        //Jsonファイルのレスポンスを受け取り
        //     )
        // .then((jsonData)=>{                         //Jsonファイルに対する処理
        //     console.log("取得")
        //     this.setState({
        //         res:[1]
        //     })
        // })
        .catch((error)=>console.log(error))
    }

    ResponsePreview(){              //レスポンスの表示
        console.log(this.state.res); 
        return(
            <ReturnList
            PreviewList={this.state.res}/>      //ReturnListにstateのresをPreviewListとして配列で渡す
            ) 
    }

    handleSubmit(){                 //ボタン押下    
        this.sendText();            //サーバーに送る
        this.setState({isSubmitted:true});      //押された
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

    render() {
        let textForm;
        
        if(this.state.isSubmitted&&this.state.text!==""){       //ボタン押下かつ文字が入ってる
            textForm=(
                this.ResponsePreview()    
            )
            
        }else{
            textForm=(
                
                <div class="search-box">
                <form class="textBox" onSubmit={()=>{this.handleSubmit()}}>
                    <input class="search-txt"
                        type="text" name="" placeholder="Type to search"
                        value={this.state.text} onChange={(event)=>{this.handleTextChange(event)}}
                    />
                    <a class="search-btn" href="#">
                        <i class="fab fa-facebook"></i>
                    </a>
                </form>
                </div>     
            )
        }

        return (
            <div class="form">

                <div class="pic">
                <img src={logo} alt="search-logo" width="550px" height="360px"/>
                </div>

                {textForm}

                <div class="wholeapp">
                    <a class="btn--blue" href="#">
                        </a>
                        <a class="btn--lightblue" href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                    <a class="btn--yellow" href="#">
                            <i class="fab fa-slack"></i>
                        </a>
                        <a class="btn--red" href="#">
                            <i class="fab fa-youtube"></i>
                        </a>
                </div>
            </div>

        );
    }
}
