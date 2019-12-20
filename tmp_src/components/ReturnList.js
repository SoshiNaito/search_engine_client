import testJson from './test.json';
import React from 'react';
import ReturnItem from './ReturnItem';

export default class ReturnList extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            Datalist: [testJson.testData]        //JSONデータ
        });
    }

    render() {
        console.log(this.state.Datalist);
        return (
            <div>
                <ul>
                    {this.state.Datalist[0].map((Dlist) => {      //配列を一つずつ取り出しDlistに格納
                        return (
                            <ReturnItem         //ReturnItemにDitemとしてDlistを渡す
                                Ditem={Dlist}
                            />
                        )
                    })
                    }
                </ul>

            </div>
        );
    }

}

