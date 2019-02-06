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
    const ourString = this.state.stringToRead;
    const charArray = ourString.split('');

    charArray.splice(charIndex, 1);
    
    const newString = charArray.join('');
    const newStringLength = newString.length;

    this.setState({
      stringToRead: newString,
      stringLength: newStringLength
    });

    // document.getElementsByClassName('lengthReader').value = newString;
  }

  render() {

    let ourString = this.state.stringToRead;
    let ourStringLength = this.state.stringLength;
    console.log(ourString[0]);
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

      console.log(displayedCharArray);
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
