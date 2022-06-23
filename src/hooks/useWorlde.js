import { useState } from 'react'
import { answerList } from '../components/AnswerList'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)]) // every guess = array | also ...array() is EXTREMELY helpful
    const [history, setHistory] = useState([]) // each guess = string
    const [isCorrect, setIsCorrect] = useState(false)
    const [usedKeys, setUsedKeys] = useState({})



    // this will format user guess into an array of 'letter' objects
    // EXAMPLE [{key: 'a', color: 'green'}]
    const formatGuess = () => {

    let solutionArray = [...solution]
    let formattedGuess = [...currentGuess].map((l) => {
        return {key: l, color: 'grey'}
    })
    
    //find green letters
    formattedGuess.forEach((l, i) => {
        if (solutionArray[i] === l.key) {
            formattedGuess[i].color = 'green'
            solutionArray[i] = null
        }
    })

    //find yellow colors
    formattedGuess.forEach((l,i) => {
        if (solutionArray.includes(l.key) && l.color !== 'green') {
            formattedGuess[i].color = 'yellow'
            solutionArray[solutionArray.indexOf(l.key)] = null
        }
    })

    return formattedGuess
}
    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true)
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess 
            return newGuesses
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1
        })
        setUsedKeys((prevUsedKeys) => {
            let newKeys = {...prevUsedKeys}
            formattedGuess.forEach(l => {
                const currentColor = prevUsedKeys[l.key]
                
                if (l.color === 'green') {
                    newKeys[l.key] = 'green'
                    return
                }
                if (l.color === 'yellow' && currentColor !== 'green') {
                    newKeys[l.key] = 'yellow'
                    return
                }
                if (l.color === 'grey' && currentColor !== ('green' || 'yellow')) {
                    newKeys[l.key] = 'grey'
                    return
                }
            })

            return newKeys
        })
        setCurrentGuess('')
    }

    const handleKeyup = ({ key }) => {
        if (isCorrect) {
            return
        }
        if (key === 'Enter') {
            //submits but only if turns havent run out
            if (turn > 5) {
                console.log('No more guesses')
                return
            }
            // no dupe words
            if (history.includes(currentGuess)) {
                console.log('word already used')
                return
            }
            // is word 5 chars long?
            if (currentGuess.length !==5) {
                console.log('need 5 letters')
                return
            }
            
            //finally - this will do the color checking thing

            const formatted = formatGuess()
            addNewGuess(formatted)

        }
        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)

            })
            return
        }
        
        //regex to make sure key entered is a LETTER key ( no shift enter delete etc)
        if (/^[A-Za-z]$/.test(key)){
            // each guess word can only be 5 letters long
            if(currentGuess.length < 5){
                setCurrentGuess(prev => prev + key) 
            }
        }
    }




 return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup }
}
export default useWordle