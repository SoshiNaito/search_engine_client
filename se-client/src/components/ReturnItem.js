import React from 'react';

export default class ReturnItem extends React.Component{
    render(){

        return(         //ReturnListから渡されたDitemの中身を取り出し表示
            <div>
                {console.log(this.props.Ditem)}         
                 <li className='Return-item'>
                    <a href={this.props.Ditem.url}  className='Returnlist'>{this.props.Ditem.title}</a>        
                 </li>

            </div>
        )
    }
}