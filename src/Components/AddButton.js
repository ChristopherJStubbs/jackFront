import React, { Component } from 'react';

class AddButton extends Component {
  constructor(props){
    super(props)
  }
  render() {

    return (
      <div className="TileButtonContainer">
        <div className="tileAddBtn">
          Add
        </div>
      </div>
    );
  }


}

export default AddButton;
