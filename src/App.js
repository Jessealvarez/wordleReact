import {useEffect, useState} from "react"
import './App.css'
import { answerList } from "./wordleWords"
import Wordle from './components/Wordle'



function App() {

  //trying to generate random word from the list
  const [solution, setSolution] = useState("karma")

  useEffect(() => {
    const randomSolution = answerList[Math.floor(Math.random()*10)]
    //very confused... cannot make the randomizer too big without causing an error so i multiply by 10
    // setSolution(randomSolution)
  }, [setSolution])
  
  

  
 return (
    <div className="App">
      <header className="App-header">
       <div>
        <WordleHeader />
        <div>    
           {solution} 
         </div>
        <Wordle solution={solution}/>
        <WordleKeyboard />
       </div>
      </header>

    </div>
  );
}


const WordleHeader = () => {
  return (

    <h1 className = "wordle-header">
      Wordle Clone
    </h1>
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


export default App;