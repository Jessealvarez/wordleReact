import React from 'react'

export default function Modal({ isCorrect, solution }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>Good Job!</h1>
          <p className="solution">{solution}</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Try again!</h1>
          <p className="solution">{solution}</p>
        </div>
      )}
    </div>
  )
}