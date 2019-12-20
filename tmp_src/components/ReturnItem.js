import React from 'react';

export default class ReturnItem extends React.Component{
    render(){
        //以下Returnlistから渡されたDitemの中身を表示
        return(
            <div>
                {console.log(this.props.Ditem)}        
                 <li className='Return-item'>       
                    <a href={this.props.Ditem.url}  className='Returnlist'>{this.props.Ditem.title}</a>        
                 </li>
            </div>
        )
    }
}
