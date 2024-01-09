import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function refreshpage () {
  window.location.reload(true)
}

export default function Wordle({ solution}) {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys} = useWordle (solution)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect) {
          setTimeout(() => setShowModal(true), 2000)
          window.removeEventListener('keyup', handleKeyup)
        }
        if (turn > 5) {
          setTimeout(() => setShowModal(true), 2000)
          window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect])

    console.log('solution is', solution)

  return (
    <>
      <div>
          <div className="form">
              <Form className="formClass">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="label">Enter Guess</Form.Label>
                  <Form.Control className="input" placeholder="Enter Guess" />
                </Form.Group>
              <Button className="formButton">
                Submit
              </Button>
            </Form>
            </div>
          <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
          {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
          <Keypad usedKeys={usedKeys} />
      </div>
    </>
  )
}
