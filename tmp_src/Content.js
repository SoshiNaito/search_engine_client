import React from 'react';


class Content extends React.Component {
  render() {
    return (
      <div className='content-item'>
        <div className='content-name'>{this.props.Cname}</div>
        <a href={this.props.Curl}><img src={this.props.Cimg} className="contentImg"alt="{this.props.Cname}"/></a>
        
      </div>
    );
  }
}

export default Content;