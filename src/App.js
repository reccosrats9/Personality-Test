import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';

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
                    "value": "#ed254e"
                  },
                  "shape": {
                    "type": "polygon",
                    "stroke": {
                      "width": 0,
                      "color": "#000000"
                    },
                    "polygon": {
                      "nb_sides": 7
                    },
                    "image": {
                      "src": "http://www.backgroundsy.com/file/large/spiral-rainbow-background.jpg",
                      "width": 100,
                      "height": 100
                    }
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
                  "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 6,
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
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "repulse"
                    },
                    "onclick": {
                      "enable": false,
                      "mode": "repulse"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 400,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }
        }
      />
        <header className='Title'> True Color Personality Test</header>
        <div className='main'>
            <p>
                Although each of us has a different personality, we also share many commonalities. The True Color personality test identifies and labels personality style by color. This model is based on  years
                of work by researchers and psychologists. It primarily draws on the works of Isabel Briggs-Myers, Katherine Briggs, and David Keirsey. Don Lowry developed this system, which uses four primary colors to
                designate personality types and behavioral styles.
            </p>
            <p>
                Lowry’s objective was the application of temperament or personality style to facilitate
                deeper communications and understanding. He hoped it would result in positive self-worth
                and self-esteem. The True Colors program was designed to maximize the
                application of psychological style in the workplace, in the family,  in education, and in
                other types of communities. The ease of understanding and use in all human
                relationships and interactions make this model very functional.
                The intent is to decrease conflict via increased understanding of ourselves and others. Once you learn your color and the colors of those in your social circle, you will have a better
                understanding of why they behave the way they do
            </p>
            <p>
                Each color is associated with certain personality traits or behaviors. Everyone has some
                degree of each color, but one color is predominant. The following quiz will identify your
                color spectrum. Follow the directions carefully. If you have two colors with the same score, you
                pick which one you think more accurately describes you. 
            </p>
            <button className= 'btn'>Start quiz</button>
        </div>
      </div>
    );
  }
}

export default App;

// source for text: https://ces-personnel.ca.uky.edu/files/true_colors_test.pdf