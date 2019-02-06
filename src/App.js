import React, { Component } from 'react';
import './App.css';
import LengthReader from './Components/LengthReader';
import ValidationComponent from './Components/ValidationComponent';

class App extends Component {

  state = { 
    stringToRead: '',
    stringLength: 0
  };

  // Read the length of a string
  // readLength = (stringToRead) => { 
  //   const stringLength = stringToRead.length;

  //   return stringLength;
  // }


  readLength = (ourString) => { 
    const ourStringLength = ourString.length;
    this.setState({
      stringLength: ourStringLength,
      stringToRead: ourString
      
    });

  }

  render() {
    return (
      <div>
        <LengthReader 
          changed={(event) => this.readLength(event.target.value)} 
          length={this.state.stringLength} />

        <ValidationComponent stringLength={this.state.stringLength} />
      </div>
     
    );
  }
}

export default App;
