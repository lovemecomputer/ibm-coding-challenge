import React, { Component } from 'react';
import Image from './components/image.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">kitties</h1>
        </header>
        <p>
          <Image imageUrl="https://files.gamebanana.com/img/ico/sprays/hello_kitty_2_preview.png" />
        </p>
        <p className="App-intro">
          test
        </p>
      </div>
    );
  }
}

export default App;
