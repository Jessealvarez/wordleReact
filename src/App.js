import {useState} from "react";
import './App.css';

const defaultGuessList = [
  ["R", "E", "A", "C", "T"],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
]


function App() {
  const [wordleGuessList, setWordleGuessList] = useState([...defaultGuessList])
  const letterGuess = useState("")
  return (
    <div className="App">
      <header className="App-header">
       <div>
        <WordleHeader />
        <WordleGrid 
        wordleGuessList={wordleGuessList}
        />
        <WordleKeyboard />
       </div>
      </header>
    </div>
  );
}

const WordleHeader = () => {
  return (
    <h1 className = "wordle-header">
      Fake Wordle
    </h1>
  )
}
 const WordleGrid = (props) => {
  return (
    <div className="wordle-grid">
      {props.wordleGuessList.map((wordleGuess)=>{
        return (
      <WordleGridRow wordleGuess={wordleGuess}/>
    )
    })}
    </div>
  )
}

const WordleGridRow = (props) => {
  return (
    <div className="wordle-grid-row">
      {props.wordleGuess.map((wordleLetter)=>{
        return (
          <WordleGridLetter wordleLetter={wordleLetter} isCorrect={wordleLetter === "A" || wordleLetter === "E"}/>
        )
      })}
    </div>
  )
}

 const WordleGridLetter = (props) => {
  return (
    <div className={`wordle-grid-letter wordle-grid-letter-${props.isCorrect}`}>
      {props.wordleLetter}
    </div>
  )
}

const WordleKeyboard = () => {
  const keys1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
  const keys2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
  const keys3 = ["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"]
  
  
  return (
    <div className="keyboard">
      <div className="line1">
         {keys1.map((key) => {
        return <div className="key"> {key} </div>;
      })}
      </div>
      <div className="line2">
      {keys2.map((key) => {
        return <div className="key2"> {key} </div>;
      })}
      </div>
      <div className="line3">
      {keys3.map((key) => {
        return <div className="key3"> {key} </div>;
      })}
      </div>
    </div>
  );
}

// * Create two new components <KeyboardRow> and <KeyboardLetter>
// * Map through keyList to display 3 <KeyboardRow>'s and then map through <KeyboardRow> to display the sub-array of <KeyboardLetter>'s. Hint: these two components should function very similarly to <WordleGridRow> and <WordleGridLetter> respectively.
// * Style you Wordle Clone grid and keyboard to appear like the real Wordle grid and keyboard. 

export default App;
