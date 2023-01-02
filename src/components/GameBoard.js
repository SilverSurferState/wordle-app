import {React} from 'react'
import {Tile} from './Tile'

function GameBoard() {
  return (
    <div className='gameBoard'>
        <div className='row'>
            <Tile position={0} value={0}></Tile>
            <Tile position={1} value={0}></Tile>
            <Tile position={2} value={0}></Tile>
            <Tile position={3} value={0}></Tile>
            <Tile position={4} value={0}></Tile>
        </div>
        <div className='row'>
            <Tile position={0} value={1}></Tile>
            <Tile position={1} value={1}></Tile>
            <Tile position={2} value={1}></Tile>
            <Tile position={3} value={1}></Tile>
            <Tile position={4} value={1}></Tile>
        </div>
        <div className='row'>
            <Tile position={0} value={2}></Tile>
            <Tile position={1} value={2}></Tile>
            <Tile position={2} value={2}></Tile>
            <Tile position={3} value={2}></Tile>
            <Tile position={4} value={2}></Tile>
        </div>
        <div className='row'>
            <Tile position={0} value={3}></Tile>
            <Tile position={1} value={3}></Tile>
            <Tile position={2} value={3}></Tile>
            <Tile position={3} value={3}></Tile>
            <Tile position={4} value={3}></Tile>
        </div>
        <div className='row'>
            <Tile position={0} value={4}></Tile>
            <Tile position={1} value={4}></Tile>
            <Tile position={2} value={4}></Tile>
            <Tile position={3} value={4}></Tile>
            <Tile position={4} value={4}></Tile>
        </div>
        <div className='row'>
            <Tile position={0} value={5}></Tile>
            <Tile position={1} value={5}></Tile>
            <Tile position={2} value={5}></Tile>
            <Tile position={3} value={5}></Tile>
            <Tile position={4} value={5}></Tile>
        </div>
    </div>
  )
}

export default GameBoard