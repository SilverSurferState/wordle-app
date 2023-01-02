import React, {useState, createContext, useEffect}from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import KeyBoard  from './components/Keyboard';
import GameLogic from './components/GameLogic';
import { words, generateSet } from './components/Words';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(words);
  const [attempt, setAttempt] = useState({attempt: 0, pos: 0});
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledKeys, setDisabledKeys] = useState([]);
  const [gameOver, setGameOver] = useState({gameOver: false, word: false});
  const [wordToGuess, setWordToGuess] = useState("");

  // const wordToGuess = "RIGHT";

  useEffect(() => {
    generateSet().then((words) => {
      setWordSet(words.wordSet);
      setWordToGuess((words.correctWord).toUpperCase());
    });
  }, []);

  const onSelectLetter = (value) => {
    if(attempt.pos > 4) return;
    const current = [...board];
    current[attempt.attempt][attempt.pos] = value;
    setBoard(current);
    setAttempt({...attempt, pos: attempt.pos + 1});
  }

  const onDeleteLetter = () => {
    if(attempt.pos === 0) return;
    board[attempt.attempt][attempt.pos -1] = "";
    setBoard(board);
    setAttempt({...attempt, pos: attempt.pos -1});
  }

  const onEnterWord = () => {
    if(attempt.pos !== 5) return;
    let currentWord = "";
    for ( let i = 0 ; i < 5; i++){
      currentWord += board[attempt.attempt][i].toLowerCase();
    }
    console.log(currentWord)
    if(wordSet.has(currentWord)){
      setAttempt({attempt: attempt.attempt + 1, pos: 0})
    }
    else {
      alert("Word not found");
    }
    if(currentWord.toUpperCase() === wordToGuess.toUpperCase()){
      setGameOver({gameOver: true, word: true});
    }
    if(attempt.attempt === 5){
      setGameOver({gameOver:true, word:false});
    }

  }


  return <>
    <h1 className='title'>WORDLE</h1>
    <AppContext.Provider value={{wordToGuess ,board, setBoard, attempt, setAttempt, onDeleteLetter , onEnterWord , onSelectLetter, setDisabledKeys, disabledKeys, gameOver, setGameOver}}>
      <GameBoard></GameBoard>
      {gameOver.gameOver ? <GameLogic/> : <KeyBoard></KeyBoard> }
    </AppContext.Provider>
    
  </>
    
  
}

export default App;
