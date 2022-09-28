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
        <div>
            <div>
                {
                    players.map(player => <Player
                    key = {player.id}
                    player = {player}
                    ></Player>)
                }
            </div>

            <div>
                <h1> cart add </h1>
            </div>
        </div>
    );
};

export default Players;