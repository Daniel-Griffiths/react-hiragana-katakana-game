import React, { Component } from 'react';
import Title from './components/Title.js';
import Button from './components/Button.js';
import Hiragana from './syllabary/Hiragana.js';
import StartButton from './components/StartButton.js';
import TimerContainer from './containers/TimerContainer.js';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameStart: false
    }
  }

  start = () => {
    this.setState({
        gameStart: true
    })
  }

  render() {
    return (
      <div>
        { !this.state.gameStart 
          ? 
            <div>
              <Title>Learn Hiragana</Title> 
              <StartButton handler={this.start}/>
            </div>
          : 
            <div>
              <Title>Guess The Character</Title> 
              <Button>Test</Button>
            </div>          
        }
      </div>
    );
  }
}
