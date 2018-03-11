import React, { Fragment, Component } from 'react'
import Title from './components/Title.js'
import Timer from './components/Timer.js'
import Alert from './components/Alert.js'
import SweetAlert from 'sweetalert-react'
import Button from './components/Button.js'
import Answer from './components/Answer.js'
import Hiragana from './syllabary/Hiragana.js'
import Katakana from './syllabary/Katakana.js'
import Character from './components/Character.js'
import StartButton from './components/StartButton.js'

export default class App extends Component {

  state = {
    alertText: '',
    alertTitle: '',
    alertActive: false,
    alertType: 'success',
    gameStart: false,
    characters: Object.assign(Hiragana, Katakana),
    currentCharacter: '',
  }

  randomCharacter(characters) {
    let result;
    let count = 0;
    Object.keys(characters).map(character => {
        if (Math.random() < 1/++count)
           result = character;
    })
    return result;
  }

  checkAnswer = (answer) => {
    if(answer == this.state.characters[this.state.currentCharacter]){
      this.setState({
          currentCharacter: this.randomCharacter(this.state.characters),
      })      
    } else {
      this.setState({
          alertType: 'error',
          alertTitle: 'Woops',
          alertText: `${this.state.currentCharacter} is "${this.state.characters[this.state.currentCharacter]}"`,
          alertActive: true,
          currentCharacter: this.randomCharacter(this.state.characters),
      })        
    }
  }

  start = () => {
    this.setState({
        gameStart: true,
        currentCharacter: this.randomCharacter(this.state.characters),
    })
  }

  end = () => {
    this.setState({
        gameStart: false,
    })
  }

  render() {
    return (
      <div>
        { !this.state.gameStart 
          ? 
            <Fragment>
              <Title>Learn Hiragana/Katakana</Title> 
              <StartButton handler={this.start}/>
            </Fragment>
          : 
            <Fragment>
              <SweetAlert
                type={this.state.alertType}
                text={this.state.alertText}
                title={this.state.alertTitle}
                show={this.state.alertActive}
                onConfirm={() => this.setState({ alertActive: false })}
              />
              { /*<Timer handler={this.end}/> */ }
              <Title>Guess The Character</Title> 
              <Character>{this.state.currentCharacter}</Character>
              <Answer handler={this.checkAnswer}/>
            </Fragment>          
        }
      </div>
    );
  }
}
