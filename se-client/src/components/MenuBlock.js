import React from 'react';

class MenuBlock extends React.Component {
  render() {
    return (
      <div className='Menu-item'>
        <a href={this.props.Murl}  className='Menu-name'>{this.props.Mname}</a>

        
      </div>
    );
  }
}

export default MenuBlock;