import React, { Component } from 'react';
import Title from './components/Title.js';
import StartButton from './components/StartButton.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Title>Learn Hiragana</Title>
        <StartButton/>
      </div>
    );
  }
}
