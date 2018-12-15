import React, { Component } from 'react';

class AcceptButton extends Component {
  constructor(props){
    super(props)
  }
  render() {

    return (
      <div className="TileButtonContainer">
        <div className="tileAddBtn" onClick={this.props.accept}>
          Accept!
        </div>
      </div>
    );
  }


}

export default AcceptButton;
