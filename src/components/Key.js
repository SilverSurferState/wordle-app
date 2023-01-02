import React, {useContext} from 'react'
import { AppContext } from '../App';

function Key({value, disabled}) {
    const {onDeleteLetter, onSelectLetter, onEnterWord} = useContext(AppContext);

    const select = () => {
        if(value === "ENTER"){
            onEnterWord()
        } else if ( value === "DEL" ){
            onDeleteLetter();
        }
        else {
            onSelectLetter(value);
        }
        

    }

  return (
    <div className='key' id={value.length > 1 ? "big" : disabled && "disabled"} onClick={select}>{value}</div>
  )
}

export default Key