import React, {  useEffect, useState } from 'react';
import {  faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getItemsDb, LocalDb } from '../Utilities/fakeDb';


const Cart = ({time}) => {
    const [cartTime , setCartTime] = useState(0)    

    useEffect(()=> {
        const storedCart = getItemsDb()
        setCartTime(storedCart)
    },[])


     const eventHandle =(event) =>{
        setCartTime(event)
        LocalDb(event)
    }
   
 
    return (
        <div className="card w-96 bg-gray-300 rounded-none h-full p-5 ">
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
                <button className='rounded-full hover:bg-blue-700 hover:text-white focus:outline-none focus:bg-blue-700 focus:text-white bg-white px-2 py-3 text-2xs '><small className='text-2xl font-bold' onClick={(e)=> eventHandle(e.target.innerText)} >10</small>m</button>
                <button className='rounded-full hover:bg-blue-700 hover:text-white focus:outline-none focus:bg-blue-700 focus:text-white bg-white px-2 py-3 text-2xs '><small className='text-2xl font-bold' onClick={(e)=> eventHandle(e.target.innerText)} >20</small>m</button>
                <button className='rounded-full hover:bg-blue-700 hover:text-white focus:outline-none focus:bg-blue-700 focus:text-white bg-white px-2 py-3 text-2xs '><small className='text-2xl font-bold' onClick={(e)=> eventHandle(e.target.innerText)} >30</small>m</button>
                <button className='rounded-full hover:bg-blue-700 hover:text-white focus:outline-none focus:bg-blue-700 focus:text-white bg-white px-2 py-3 text-2xs '><small className='text-2xl font-bold' onClick={(e)=> eventHandle(e.target.innerText)} >40</small>m</button>
                <button className='rounded-full hover:bg-blue-700 hover:text-white focus:outline-none focus:bg-blue-700 focus:text-white bg-white px-2 py-3 text-2xs '><small className='text-2xl font-bold' onClick={(e)=> eventHandle(e.target.innerText)} >50</small>m</button>                
            </div>
        </div>

        <div>
            <h1 className='card-title text-xl font-semibold '> Playing Details </h1>
            <div className='flex justify-between mt-5 py-3 bg-gray-200 px-4 rounded-md'>
                <h1 className='card-title'>Playing time </h1>
                <h1 className='text-xl'>{time} minutes</h1>
            </div>
            <div className='flex justify-between mt-5 py-3 bg-gray-200 px-4 rounded-md'>
                <h1 className='card-title'>Break time </h1>
                <h1 className='text-xl'> {cartTime} minutes</h1>
            </div>

            <div className="card-actions mt-16 ">
                <button className="btn btn-primary rounded-sm w-full ">Add to list</button>
            </div>

        </div>
    </div>
    );
};

export default Cart;