import React from 'react';
import ReturnItem from './ReturnItem';

export default class ReturnList extends React.Component {

<<<<<<< HEAD:tmp_src/components/ReturnList.js
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
=======

    // componentWillMount(){                        //やっちゃいいかな。。なくてもいい現段階では
    //     console.log(this.props.PreviewList)
    //     this.setState({
    //         Datalist:[this.props.PreviewList]
    //     })
    //     console.log(this.state.Datalist);
    // }


    render(){
        
        return(
            <div>    
                 <ul>
                    {this.props.PreviewList.map((Dlist)=>{      //渡されたのをそのままmap
                        return(                                 //配列を一つずつ取り出しReturnIitemにDItemとして渡す
                            <ReturnItem
                            Ditem={Dlist}
                            /> 
                        )
                    })                
>>>>>>> b5c477e49bdb65ea2b50c617329ef845eacde7a0:se-client/src/components/ReturnList.js
                    }
                </ul>

            </div>
        );
    }

}

