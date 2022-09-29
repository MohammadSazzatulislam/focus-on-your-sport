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
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-8 lg:p-16 w-full'>
                <div className='col-span-1 w-full mx-auto p-4 lg:col-span-3 md:col-span-2'>
                    <h2 className="card-title text-3xl font-bold uppercase text-lime-700 "> <span className='text-orange-600'><FontAwesomeIcon icon = {faBasketball}></FontAwesomeIcon></span> Focus-on-your-Sport</h2>
                    <h1 className='card-title text-2xl mt-5 text-emerald-700 '> Select today's Playing </h1>
                </div>
                    {
                        players.map(player => <Player
                        key = {player.id}
                        player = {player}
                        handleAddButton = {handleAddButton}
                        ></Player>)
                    }
                <div className='col-span-1 w-full mx-auto lg:col-span-3 md:col-span-2 shadow-2xlp-4'>
                    <div tabIndex={0} className="collapse mb-5 collapse-arrow border border-base-300 bg-base-100 rounded-box mx-auto w-full grid col-span-3 ">
                        <div className="collapse-title text-xl font-medium">
                        1. How does react work ?
                        </div>
                        <div className="collapse-content"> 
                            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse mb-5 collapse-arrow border border-base-300 bg-base-100 rounded-box mx-auto w-full grid col-span-3 ">
                        <div className="collapse-title text-xl font-medium">
                        2. what is the difference between props and state ?
                        </div>
                        <div className="collapse-content"> 
                            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-auto w-full grid col-span-3 ">
                        <div className="collapse-title text-xl font-medium">
                        3. what type purpose of use useeffect hook ?
                        </div>
                        <div className="collapse-content"> 
                            <p>Sometimes, we want to run some additional code after React has updated the DOM. Network requests, manual DOM mutations, and logging are common examples of effects that don't require a cleanup. We say that because we can run them and immediately forget about them. Let's compare how classes and Hooks let us express such side effects.</p>
                        </div>
                    </div>
                </div>
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