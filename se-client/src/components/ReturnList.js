import React from 'react';
import ReturnItem from './ReturnItem';

export default class ReturnList extends React.Component {


    // componentWillMount(){
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
                    {this.props.PreviewList.map((Dlist)=>{
                        return(                      
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

