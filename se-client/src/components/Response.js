import React from 'react';
import Pagination from './Pagination';
// import testJson from './test.json';
import {Route, withRouter} from 'react-router-dom';
// import SerchForm from './SerchForm';
const getUrl = "http://localhost:8000/";


class Response extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exampleItems: [],
            pageOfItems: []
        }
        this.onChangePage = this.onChangePage.bind(this);
        this.ReturnList = this.ReturnList.bind(this);
    }

    componentWillMount() {
        this.sendText();
    }

    componentDidMount() {
        this.sendText();
    }

    sendText() {
        // 送信
        fetch(getUrl + this.props.location.state.text, {mode: "cors"})
            .then((response) => response.json())        //Jsonファイルのレスポンスを受け取り
            .then((json) => {
                console.log(json)
                //レスポンス受け取った後の処理
                this.setState({
                    exampleItems: json          //テスト用データを格納
                })

            })
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({pageOfItems: pageOfItems});
    }

    ReturnList() {
        return (
            <div>
                {this.state.pageOfItems.map(item => (
                    <a href={item.url} target="_blank" rel="noopener" className='Returnlist'>
                        <li className='Return-item'>
                            {item.title}
                        </li>
                    </a>
                ))}
            </div>
        )

    }

    render() {
        // this.sendText();


        return (
            <div className="Res">

                <Route exact path='/:id' render={this.ReturnList}/>
                <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage}/>

            </div>
        )
    }
}

export default withRouter(Response)


