import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <div className="imageResult">
        <div className="thumbnailContainer">
          <img src={this.props.imageUrl} />
        </div>
      </div>
    );
  }
}

export default Image;
