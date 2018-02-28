import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <a className="image-result" href={this.props.imageUrl}>
        <img src={this.props.imageUrl} alt={this.props.caption} />
      </a>
    );
  }
}

export default Image;
