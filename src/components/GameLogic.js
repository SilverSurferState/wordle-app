import React, {useContext} from 'react';
import { AppContext } from '../App';

function GameLogic() {
    const { gameOver, attempt, wordToGuess } = useContext(AppContext);
  return (
    <div className='gameOver'>
        <h2>{gameOver.word ? "That's it! Well done!" : "The correct word was " + wordToGuess}</h2>
        {gameOver.word && <h3>You got it in {attempt.attempt} attempts!</h3>}
    </div>
  )
}

export default GameLogic
