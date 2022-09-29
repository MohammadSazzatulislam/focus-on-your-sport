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
        <div className='flex flex-col justify-between lg:flex-row md:flex-row sm:flex-col gap-7 '>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-7 lg:p-16 w-full'>
                <div className='col-span-1 w-full mx-auto p-4 lg:col-span-3 md:col-span-2'>
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
                {/* <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-auto w-full grid col-span-3 ">
                    <div className="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div className="collapse-content"> 
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div> */}
            </div>

            <div className=''>
                {
                    <Cart time = {addCartTime} ></Cart>
                }
            </div>
        </div>
    );
};

export default Players;