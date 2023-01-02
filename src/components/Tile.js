import React, {useContext, useEffect} from 'react';
import {AppContext} from "../App";
  
export function Tile({position, value}) {
    const { board, wordToGuess, attempt, setDisabledKeys } = useContext(AppContext);
    const letter = board[value][position];

    const perfect = wordToGuess[position] === letter;
    const nearly = !perfect && letter !== "" && wordToGuess.includes(letter);
    const state = attempt.attempt > value && (perfect ? "perfect" : nearly ? "nearly" : "default");  

    
    useEffect(() => {
      if(letter !== "" && !perfect && !nearly){
        setDisabledKeys((passed => [...passed, letter]))
      }
      // eslint-disable-next-line
    }, [attempt.attempt]);

  return (
  <div className='tile' id={state}>
    {" "}
    <div className='letter'>
    {letter}
    </div>
  </div>
    
  );
    
  
}

