import React, { useEffect, useState } from 'react';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';

const Players = () => {
    const [players, setPlayers] = useState([])

    const [addCartTime , setAddCartTime] = useState(0)

    useEffect(()=> {
        fetch('fakeDb.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    
   
    const handleAddButton = (time) => {
       const newCartTime = addCartTime + time
       setAddCartTime(newCartTime)
    }


    return (
        <div className='flex mx-auto justify-between  '>
            <div className='grid grid-cols-3 gap-7 p-24 '>
            <div className='grid col-span-3'>
                <h2 className="card-title text-3xl font-bold uppercase "> <FontAwesomeIcon icon = {faBasketball}></FontAwesomeIcon> Focus-on-your-Sport</h2>
                <h1 className='card-title text-2xl mt-5 '> Select today's Playing </h1>
            </div>
                {
                    players.map(player => <Player
                    key = {player.id}
                    player = {player}
                    handleAddButton = {handleAddButton}
                    ></Player>)
                }
            </div>

            <div>
                {
                    <Cart time = {addCartTime} ></Cart>
                }
            </div>
        </div>
    );
};

export default Players;