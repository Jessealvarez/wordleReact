import {useEffect, useState} from "react"
import './App.css'
import { answerList } from "./wordleWords"
import useWordle from "./hooks/useWorlde"
import Wordle from "./components/Wordle"



function App() {

  //trying to generate random word from the list
  const [solution, setSolution] = useState("karma")
  const { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup } =
    useWordle(solution);


  useEffect(() => {

    const randomSolution = answerList[Math.floor(Math.random()*10)]
    
  }, [setSolution])
  
  

  
 return (
    <div className="App">
      <header className="App-header">
       <div>
        <WordleHeader />
        <div>    
           {solution && <Wordle solution={solution}/>} 
         </div>
        
       
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




export default App;