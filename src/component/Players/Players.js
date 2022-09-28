import { faBasketball, faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = () => {
    const [players, setPlayers] = useState([])

    const [addCart , setAddCart] = useState([])

    useEffect(()=> {
        fetch('fakeDb.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    const handleAddButton = (player) => {
        setAddCart(player)
    }

console.log(addCart)

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
                <div className="card w-96 bg-gray-300 rounded-none h-full p-5  ">
                    <div className='flex justify-between mb-5'>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div>
                            <h1 className='card-title'>Mohammad Sazzatul Islam</h1>
                            <p><FontAwesomeIcon icon ={faLocation}></FontAwesomeIcon>  Mirsarai, Chittagong</p>
                        </div>
                    </div>

                    <div className="stats stats-vertical lg:stats-horizontal border-none rounded-md bg-gray-100">
                        <div className="stat border-none ">
                            <h1 className="text-3xl font-bold">31<small className="font-semibold text-sm ">kg</small></h1>
                            <p className="font-semibold">weight</p>
                        </div>
                        <div className="stat border-none ">
                            <h1 className="text-3xl font-bold">31<small className="font-semibold text-sm ">kg</small></h1>
                            <p className="font-semibold">weight</p>
                        </div>
                        <div className="stat border-none ">
                            <h1 className="text-3xl font-bold">31<small className="font-semibold text-sm ">kg</small></h1>
                            <p className="font-semibold">weight</p>
                        </div>
                    </div>

                    <div>
                        <h1 className='card-title text-xl font-semibold '> Add A Break </h1>
                        <div className="btn-group lg:btn-group-horizontal bg-gray-200 px-3 py-4 w-full flex justify-around mt-5 rounded-md ">
                            <button className='rounded-full bg-white p-3 '>20s</button>
                            <button className='rounded-full bg-white p-3 '>20s</button>
                            <button className='rounded-full bg-white p-3 '>20s</button>
                            <button className='rounded-full bg-white p-3 '>20s</button>
                            <button className='rounded-full bg-white p-3 '>20s</button>
                        </div>
                    </div>

                    <div>
                        <h1 className='card-title text-xl font-semibold '> Playing Details </h1>
                        <div className='flex justify-between mt-5 py-3 bg-gray-200 px-4 rounded-md'>
                            <h1 className='card-title'>Playing time </h1>
                            <h1 className='text-xl'>{addCart.timeRequired} minutes</h1>
                        </div>
                        <div className='flex justify-between mt-5 py-3 bg-gray-200 px-4 rounded-md'>
                            <h1 className='card-title'>Break time </h1>
                            <h1 className='text-xl'> minutes</h1>
                        </div>

                        <div className="card-actions mt-16 ">
                            <button className="btn btn-primary rounded-sm w-full ">Add to list</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Players;