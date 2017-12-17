import React, { Component } from 'react';
import Title from './components/Title.js';
import Button from './components/Button.js';
import Answer from './components/Answer.js';
import Hiragana from './syllabary/Hiragana.js';
import Character from './components/Character.js';
import StartButton from './components/StartButton.js';
import TimerContainer from './containers/TimerContainer.js';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameStart: false,
      characters: Hiragana,
      currentCharacter: null,
    }
  }

  randomCharacter(obj) {
    let result;
    let count = 0;
    for (let prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
  }

  start = () => {
    this.setState({
        gameStart: true,
        currentCharacter: this.randomCharacter(this.state.characters),
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
              <Character>{this.state.currentCharacter}</Character>
              <Answer/>
            </div>          
        }
      </div>
    );
  }
}
