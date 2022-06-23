import React, { useEffect } from 'react'
import useWordle from '../hooks/useWorlde'
import Grid from './Grid'
import Modal from './Modal'


export default function Wordle({ solution }) {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution)

    useEffect (() => {
        window.addEventListener('keyup', handleKeyup)

        return () => window.removeEventListener('keyup', handleKeyup)
    },[handleKeyup])

    useEffect(() => {
      console.log(guesses,turn, isCorrect)
    }, [guesses, turn, isCorrect])

  return (
    <div>
    <Modal isCorrect={isCorrect} solution={solution} />
    <Grid currentGuess={currentGuess} guesses={guesses} turn = {turn} />
    </div>
  )
}
