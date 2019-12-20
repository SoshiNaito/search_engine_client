import React from 'react';
import ReturnItem from './ReturnItem';

export default class ReturnList extends React.Component {


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
                    }
                </ul>

            </div>
        );
    }

}

