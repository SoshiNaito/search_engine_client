//空白変換、POST同ファイルでの動作確認済み　


import React from 'react';

const postUrl="http://localhost:8080/";
const test={
    Testname:'test',
    Testage:999
}


export default class PostForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            text:'',            //入力文字表示
            PostData:'',        //送信データ,JSON形式
            isSubmitted:false,          //入力されたか 

        }

    }

    

    componentWillMount(){
        this.PostfetchResponse();
    }


    PostfetchResponse(){            //POST接続確認
        fetch(postUrl,{
            method:'POST',
            body:JSON.stringify(test)
        })
        .then((response)=>{
            if(response.ok){
                return response.text();
            }else{
                throw new Error();
            }
        })
        .then((text)=>console.log(text))
        .catch((error)=>console.log(error))
    }

    handleTextChange(event){         

        let inputValue=event.target.value;      //入力されたものをtestArrayに格納
        let testArray={value:''};
        testArray.value=inputValue;
        

        this.setState({
            text:inputValue,        //入力の表示
            PostData:JSON.stringify(testArray)      //testArrayをJSONに変換しPostDataとして保持
        })



    }

    sendText(){             //送信
        
        fetch(postUrl,{
            method:'POST',
            body:this.state.PostData
        })
        .catch((error)=>console.log(error));

    }



    handleSubmit(){         //ボタンが押された時
        this.sendText();        //変換、送信
        this.setState({         //押されたか
            isSubmitted:true
        })

    }




    render(){

        let LoginForm;


        if(this.state.isSubmitted&&this.state.text!==""){
            LoginForm=(
                <p>送信完了</p>
            )
            
            
            }else{
                LoginForm=(
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
                 <p>POSTFORM</p>
                {LoginForm}

            </div>
        );
    }
}