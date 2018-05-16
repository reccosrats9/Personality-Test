import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Header from './Components/Header/Header'
import router from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles 
        params={
            {
                "particles": {
                  "number": {
                    "value": 55,
                    "density": {
                      "enable": true,
                      "value_area": 1000
                    }
                  },
                  "color": {
                    "value": ["#ed254e", "#00A7E1", "#EAC73A", "#36D152" ]
                  },
                  "shape": {
                    "type": "polygon",
                    "polygon": {
                      "nb_sides": 7
                    },
                  },
                  "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 96.20472365193136,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "move": {
                    "enable": true,
                    "speed": 4,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "retina_detect": true
              }
        }
      />
        <Header /> 
        <div>{router}</div>
      </div>
    );
  }
}

export default App;

// source for text: https://ces-personnel.ca.uky.edu/files/true_colors_test.pdf