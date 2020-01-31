//空白変換、GET同ファイルでの動作確認済み　
import React from 'react';
import { withRouter } from 'react-router-dom';

var getUrl ="http://localhost:8000/";

class SerchForm extends React.Component{
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

    handleSubmit(){                 //ボタン押下​
        let sendText='/'+this.state.serchText;
        this.props.history.push({
          pathname: sendText,
          state: { text: this.state.serchText }
      });
    }
    handleTextChange(event){        //入力の表示,空白の変換
        let inputValue=event.target.value;
        let nones ='?q='+inputValue.trim();
        nones=nones.replace(/\s+/g,"+");
        this.setState({
            text:inputValue,
            serchText:nones,
        })
    }
    render() {

        const FormStyle=(
            <form class="search-box" onSubmit={()=>{this.handleSubmit()}}>
            <input class="search-txt" autocomplete="off" tabindex="-1" name="" placeholder="Type to search"
            type="text" aria-hidden="true" value={this.state.text}
            onChange={(event)=>{this.handleTextChange(event)}}/>
            <a class="search-btn" href="#"></a>
            <i class="fas fa-search"></i>
            </form>
        )

        const appViw=(
            <div class="wholeapp">
            <a class="btn--blue" href="https://www.facebook.com/">
            <i class="fab fa-facebook"></i>
                </a>
                <a class="btn--lightblue" href="https://twitter.com/">
                    <i class="fab fa-twitter"></i>
                </a>
            <a class="btn--purple" href="https://slack.com/">
                    <i class="fab fa-slack"></i>
                </a>
                <a class="btn--red" href="https://www.youtube.com/">
                    <i class="fab fa-youtube"></i>
             </a>
            </div>
        )
      
        return (   
            <div class="form">
                {FormStyle}
                {appViw}
            </div>
        );
    }
}
export default withRouter(SerchForm);