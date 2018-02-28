import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <div className="image-result">
        <img src={this.props.imageUrl} alt={this.props.caption} />
      </div>
    );
  }
}

export default Image;
