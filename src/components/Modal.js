import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function refreshpage () {
  window.location.reload(true)
}

export default function Modal({ isCorrect, solution, turn }) {
  return (
    <div className="message">
      {isCorrect && (
        <div>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <h2>Congratulations</h2>
                <p>You won this award with your determination and bravery<br></br>🏆</p>
                <button className="refresh" onClick={refreshpage}>Play Again</button>
              </Card.Body>
            </Card>
        </div>
      )}
      {!isCorrect && (
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <h2>Thanks</h2>
              <p>But Princess in another castle Mario🍄</p>
              <button className="refresh" onClick={refreshpage}>Play Again</button>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  )
}
