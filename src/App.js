import React, { Component } from 'react';
import './App.css';
import LengthReader from './Components/LengthReader';
import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';

class App extends Component {

  state = { 
    stringToRead: '',
    stringLength: 0,
    // id: Math.random() * 100
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
    // console.log(ourString)

  }

  render() {

    let ourString = this.state.stringToRead;
    console.log(ourString[0]);
    let charArrayItem = null;
    let charArray = [];


    if (this.state.stringLength > 0) { 
      for (let i=0; i<this.state.stringLength; i++) { 
        charArrayItem = (
          <div>
            <CharComponent 
              // key={}
              character={ourString[i]}/>
          </div>
        );
        charArray.push(charArrayItem);
      }
    }






    return (
      <div>
        <LengthReader 
          changed={(event) => this.readLength(event.target.value)} 
          length={this.state.stringLength} />

        <ValidationComponent stringLength={this.state.stringLength} />

        {charArray}



      </div>
     
    );
  }
}

export default App;
