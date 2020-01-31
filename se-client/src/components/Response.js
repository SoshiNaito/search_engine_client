import React from 'react';
import Pagination from './Pagination';
import testJson from './test.json';
import { Route,withRouter } from 'react-router-dom';
// import SerchForm from './SerchForm';
const getUrl ="http://localhost:8000/";


class Response extends React.Component {
    constructor(props){
        super(props);
        this.state={
            exampleItems: [],
            pageOfItems: []
        }
        this.onChangePage = this.onChangePage.bind(this);
        this.ReturnList = this.ReturnList.bind(this);
    }

    componentWillMount(){
        this.sendText();
    }

    componentDidMount(){
        this.sendText();
    }

    sendText(){             //送信   
        fetch(getUrl+this.props.location.state.text,{mode:"no-cors"})
        .then((response)=>response.text())        //Jsonファイルのレスポンスを受け取り       
        .then((text)=>{                 //レスポンス受け取った後の処理
            console.log("testjsonCommit"+text)
            this.setState({
                exampleItems:testJson          //テスト用データを格納
            })

            console.log(this.state.pageOfItems)
        })
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    ReturnList(){
        console.log(this.state.pageOfItems)

        return(            
            <div>
                {this.state.pageOfItems.map(item =>(

                <li className='Return-item'>
                    <a href={item.url}  className='Returnlist'>{item.title}</a>
                </li>
                ))}
            </div>
        )       
        
    }

    render(){
        // this.sendText();
 


        return(
            <div className="Res">
               
                <Route exact path='/:id' render={this.ReturnList}/>
                <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                
            </div>
        )
    }
}

export default withRouter(Response)


