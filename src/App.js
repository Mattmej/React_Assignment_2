import React, { Component } from 'react';
import './App.css';
import LengthReader from './Components/LengthReader';
import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';

class App extends Component {

  state = { 
    stringToRead: '',
    stringLength: 0,
  };


  // Read the length of a string
  readLength = (ourString) => { 
    const ourStringLength = ourString.length;

    // Setting state based on the read length
    this.setState({
      stringLength: ourStringLength,
      stringToRead: ourString
    });

  }

  deleteChar = (charIndex) => {

    // Copy of stringToRead state
    const ourString = this.state.stringToRead;

    // Creating an array from the string's characters
    const charArray = ourString.split('');

    // Removes a character from the charArray at the index specified by "charIndex"
    charArray.splice(charIndex, 1);
    
    // Creates a new string by joining all the characters in charArray
    const newString = charArray.join('');
    const newStringLength = newString.length;

    // Sets the state after the character deletion.
    this.setState({
      stringToRead: newString,
      stringLength: newStringLength
    });

  }

  render() {

    // Copies of state properties.
    let ourString = this.state.stringToRead;
    let ourStringLength = this.state.stringLength;

    let charArray = ourString.split('');

    // Will hold the CharComponents
    let displayedCharArray = [];

    // If the string length is greater than 0
    if (this.state.stringLength > 0) { 

      displayedCharArray = (
        <div>
          {/* Returns multiple CharComponents, depending on the number of characters in charArray.
              These components are elements of an array */}
          {charArray.map((char, index) => {
            return <CharComponent
            click={() => this.deleteChar(index)}
            key={Math.random() * 100} 
            character={char}/>
          })}
        </div>
      );
    }


    return (
      <div>
        <LengthReader 
          changed={(event) => this.readLength(event.target.value)} 
          length={ourStringLength}
          text={ourString} />

        <ValidationComponent stringLength={ourStringLength} />

        {displayedCharArray}

      </div>
    );
  }
}

export default App;
