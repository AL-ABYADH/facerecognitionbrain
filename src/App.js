import React, {Component} from 'react';
import ParticlesBackground from './components/particles/ParticlesBackground';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank//Rank';
import './App.css';

const app = new Clarifai.App({
 apiKey: 'b1f8357c5c4740cd987463b5a1624f97'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click')
    app.models
    .predict(
      "a403429f2ddf4b49b307e318f00e528b",
      "https://samples.clarifai.com/face-det.jpg")
    .then(
      function(response) {
        console.log(response);
      },
      function(err) {
      }
    );  
  }

  render() {
    return (
    <div className="App">
      <ParticlesBackground />
      <Navigation />
      <Rank />
      <Logo />
      <ImageLinkForm
      onInputChange={this.onInputChange}
      onButtonSubmit={this.onButtonSubmit}
      />
      {/*<FaceRecognition />*/}
    </div>
    );
  }
}

export default App;
