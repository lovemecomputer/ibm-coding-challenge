import React, { Component } from 'react';
import Image from './components/image.js';

let apiQuery = 'https://pixabay.com/api/?key=8195230-3650e46b120c88a4b1171bd48&q=kitties&image_type=photo&per_page=10&page=';

class App extends Component {

  constructor(props) {
    super(props);
    this.goToNextPage = this.goToNextPage.bind(this);

    this.state = {
      hits: [],
      page: 1
    };
  }

  componentDidMount() {
    this.getImages();
  }

  getImages() {
    fetch(apiQuery + this.state.page)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

  goToNextPage() {
    this.setState((prevState, props) => ({
      page: prevState.page + 1
    }));
  }

  render() {
    return (
      <div className="App">
        <main className="image-viewer">
          <header className="App-header">
            <h1 className="App-title">😻<br/>view kitties</h1>
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
              more kitties, pls >
            </a>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
