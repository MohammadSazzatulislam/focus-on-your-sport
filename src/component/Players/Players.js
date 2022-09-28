import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = () => {
    const [players, setPlayers] = useState([])

    useEffect(()=> {
        fetch('fakeDb.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])


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
                    ></Player>)
                }
            </div>

            <div>
                <div className="card w-96 bg-gray-300 rounded-none h-full  ">
                    <div className="card-body   ">
                        <h2 className="card-title">Cookies!</h2>
                        <p> hellow world</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Players;