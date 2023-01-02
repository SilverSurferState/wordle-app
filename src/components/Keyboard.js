import React, {useCallback, useEffect, useContext} from 'react';
import Key from './Key';
import { AppContext } from '../App';


function Keyboard() {
const row1 = ["Q","W","E","R","T","Y","U","I","O","P"];
const row2 = ["A","S","D","F","G","H","J","K","L"];
const row3 = ["Z","X","C","V","B","N","M"];
const {onDeleteLetter, onSelectLetter, onEnterWord, disabledKeys} = useContext(AppContext);

const handleKeyStroke = useCallback((e) => {
    if(e.key === "Enter"){
        onEnterWord();
    }else if(e.key === "Backspace"){
        onDeleteLetter();
    }else {
        const allKeys = row1.concat(row2, row3);
        if(allKeys.includes(e.key.toUpperCase())){
            onSelectLetter(e.key.toUpperCase())
        }
    }
})

useEffect(() => {
    document.addEventListener("keydown", handleKeyStroke)

    return () => {
        document.removeEventListener("keydown", handleKeyStroke)
    }
}, [handleKeyStroke])




  return (
    <div className='keyboard' onKeyDown={handleKeyStroke}>
        <div className='keyrow'>
            {row1.map(k => <Key value={k} disabled={disabledKeys.includes(k)} key={k}></Key>)}
        </div>
        <div className='keyrow'>
            {row2.map(k => <Key value={k} disabled={disabledKeys.includes(k)} key={k}></Key>)}
        </div>
        <div className='keyrow'>
            <Key value={"ENTER"}></Key>
            {row3.map(k => <Key value={k} disabled={disabledKeys.includes(k)} key={k}></Key>)}
            <Key value={"DEL"}></Key>
        </div>
    </div>
  )
}

export default Keyboard