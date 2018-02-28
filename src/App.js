import React, { Component } from 'react';
import Image from './components/image.js';

let apiQueryKey = 'https://pixabay.com/api/?key='
let key = '8195230-3650e46b120c88a4b1171bd48';
let queryParameter = '&q=';
let queryOptions = '&image_type=photo&per_page=10&page=';

class App extends Component {

  constructor(props) {
    super(props);
    this.goToNextPage = this.goToNextPage.bind(this);

    this.state = {
      hits: [],
      page: 1,
      species: 'kitties'
    };
  }

  componentDidMount() {
    this.getImages();
  }

  componentDidUpdate() {
    if( arguments[1].page != this.state.page || arguments[1].species != this.state.species){
      this.getImages();
    }
  }

  getImages() {
    fetch(apiQueryKey + key + queryParameter + this.state.species + queryOptions + this.state.page)
      .then(response => response.json())
      .then(data => {
        this.setState({ hits: data.hits });
      });
  }

  switchSpecies() {
    console.log('!!!!!!! switching species!');
    if(this.state.species === 'kitties') {
      this.setState({ species: 'puppies', page: 1 });
    } else {
      this.setState({ species: 'kitties', page: 1 });
    }
  }

  goToNextPage() {
    this.setState((prevState) => {
      return {page: prevState.page + 1};
    });
  }

  renderEmoji() {
    if(this.state.species === 'kitties') return '😻';
    if(this.state.species === 'puppies') return '🐶';
  }

  render() {
    return (
      <div className="App">
        <main className="image-viewer">
          <header className="App-header">
            <h1 className="App-title">
              {this.renderEmoji()}<br/>
              view <a 
                href="#"
                onClick={()=>{this.switchSpecies()}}
                className="species-switcher"
              >
                {this.state.species}
                </a>
            </h1>
          </header>
          {this.state.hits.map( (imageHit, index) => {
            return (
              <Image 
                imageUrl={imageHit.webformatURL} 
                caption={"kitten image"}
                key={imageHit.id}
              />
            );
          })}
          <div className="pagination">
            <a 
              className="btn-link" 
              href="#" 
              onClick={event=>{
                this.goToNextPage();
              }}>
              more {this.state.species}, pls >
            </a>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
