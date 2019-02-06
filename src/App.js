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
    let charArray = ourString.split('');
    let displayedCharArray = [];


    // If the string length is greater than 0
    if (this.state.stringLength > 0) { 


      displayedCharArray = (
        <div className='charComponent'>

          {/* Returns multiple CharComponents, depending on the number of characters in charArray.
              These components are elements of an array */}
          {charArray.map((char, index) => {
            return <CharComponent
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
          length={this.state.stringLength} />

        <ValidationComponent stringLength={this.state.stringLength} />

        {displayedCharArray}



      </div>
     
    );
  }
}

export default App;
