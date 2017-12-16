import React, { Component } from 'react';
import Title from './components/Title.js';
import Hiragana from './syllabary/Hiragana.js';
import StartButton from './components/StartButton.js';
import TimerContainer from './containers/TimerContainer.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <TimerContainer/>
        <Title>Learn Hiragana</Title>
        <StartButton/>
      </div>
    );
  }
}
