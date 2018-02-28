import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <div className="image">
        <img src={this.props.imageUrl} />
      </div>
    );
  }
}

export default Image;
