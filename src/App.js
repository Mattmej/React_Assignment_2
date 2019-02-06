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
    charArray: []
  };

  // Read the length of a string
  // readLength = (stringToRead) => { 
  //   const stringLength = stringToRead.length;

  //   return stringLength;
  // }


  readLength = (ourString, id) => { 
    const ourStringLength = ourString.length;

    let charArray = [];

    if (this.state.stringLength > 0) { 
      for (let i=0; i<ourStringLength; i++) { 
        charArray.push(
          {id: Math.random() * 100, character: ourStringLength[i]}
        )
      }
    }






    if (this.state.stringLength > 0) { 



      // for (let i=0; i<this.state.stringLength; i++) { 
      //   charArrayItem = (
      //     <div>
      //       <CharComponent 
      //         // key={}
      //         character={ourString[i]}/>
      //     </div>
      //   );
      //   charArray.push(charArrayItem);
      // }

      const charIndex = this.state.charArray.findIndex(char => { 
        return char.id === id;
      })

      const character = { 
        ...this.state.charArray[charIndex]
      }







    


    this.setState({
      stringLength: ourStringLength,
      stringToRead: ourString,
      charArray: charArray
    });
    // console.log(ourString)

  }

  render() {

    let ourString = this.state.stringToRead;
    console.log(ourString[0]);
    // let charArrayItem = null;
    let charArray = [];


    

      charArray = (
        <div>
          {this.state.charArray.map((character, index) => { 
            return <CharComponent 
              key={}
              character={character[index]} />
          })}
        </div>
      )




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
