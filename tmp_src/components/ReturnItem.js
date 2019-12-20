import React from 'react';

export default class ReturnItem extends React.Component{
    render(){
<<<<<<< HEAD:tmp_src/components/ReturnItem.js
        //以下Returnlistから渡されたDitemの中身を表示
        return(
=======

        return(         //ReturnListから渡されたDitemの中身を取り出し表示
>>>>>>> b5c477e49bdb65ea2b50c617329ef845eacde7a0:se-client/src/components/ReturnItem.js
            <div>
                {console.log(this.props.Ditem)}         
                 <li className='Return-item'>
                    <a href={this.props.Ditem.url}  className='Returnlist'>{this.props.Ditem.title}</a>        
                 </li>
            </div>
        )
    }
}
