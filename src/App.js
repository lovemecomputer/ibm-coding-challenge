import React, { Component } from 'react';
import Image from './components/image.js';

const apiQuery = 'https://pixabay.com/api/?key=8195230-3650e46b120c88a4b1171bd48&q=test&image_type=photo&per_page=10&page=1';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch(apiQuery)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">kitties</h1>
        </header>
        {this.state.hits.map( (imageHit, index) => {
          return (
            <Image 
              imageUrl={imageHit.previewURL} 
              key={imageHit.id}
            />
          );
        })}
        <Image imageUrl="https://files.gamebanana.com/img/ico/sprays/hello_kitty_2_preview.png" />
      </div>
    );
  }
}

export default App;
