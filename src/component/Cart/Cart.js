import React, {  useEffect, useState } from 'react';
import {  faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getItemsDb, LocalDb } from '../Utilities/fakeDb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../profile.png'




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
   
    const handleToast = () => {
         toast("Activity Completed successfully!!!");
    }
 
    return (
        <div className="card lg:w-96 md:w-60 sm:w-full w-full bg-gray-300 rounded-none h-full p-5 mx-auto ">
        <div className='flex justify-between mb-7'>
            <div className="avatar">
                <div className="lg:w-16 md:w-10 w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={logo} />
                </div>
            </div>
            <div>
                <h1 className=' lg:text-xl text-md font-semibold md:text-sm'>Mohammad Sazzatul Islam</h1>
                <p className='md:text-sm text-md'><FontAwesomeIcon icon ={faLocation}></FontAwesomeIcon>  Mirsarai, Chittagong</p>
            </div>
        </div>

        <div className="stats stats-horizontal border-none rounded-md bg-gray-200 mb-7">
            <div className="stat border-none md:w-20 ">
                <h1 className="lg:text-3xl md:text-xl sm:text-md font-bold">62<small className="font-semibold text-sm ">kg</small></h1>
                <p className="font-semibold md:text-sm">weight</p>
            </div>
            <div className="stat border-none md:w-20 ">
                <h1 className="lg:text-3xl md:text-xl sm:text-md font-bold">5.11</h1>
                <p className="font-semibold md:text-sm">height</p>
            </div>
            <div className="stat border-none md:w-20 ">
                <h1 className="lg:text-3xl md:text-xl sm:text-md font-bold">25<small className="font-semibold text-sm ">yrs</small></h1>
                <p className="font-semibold md:text-sm">age</p>
            </div>
        </div>

        <div className='mb-7'>
            <h1 className='lg:text-2xl md:text-xl text-md font-semibold '> Add A Break </h1>
            <div className="btn-group lg:btn-group-horizontal bg-gray-200 px-3 py-4 w-full flex justify-around mt-5 rounded-md ">
                <button className='rounded-full hover:bg-blue-700 hover:text-white focus:outline-none focus:bg-blue-700 focus:text-white bg-white px-1 py-2 lg:px-2 lg:py-3 md:px-1 md:py-1 text-2xs '><small className='lg:text-2xl md:text-xl text-xl font-bold' onClick={(e)=> eventHandle(e.target.innerText)} >10</small>m</button>
                <button className='rounded-full hover:bg-blue-700 hover:text-white focus:outline-none focus:bg-blue-700 focus:text-white bg-white px-1 py-2 lg:px-2 lg:py-3 md:px-1 md:py-1 text-2xs '><small className='lg:text-2xl md:text-xl text-xl font-bold' onClick={(e)=> eventHandle(e.target.innerText)} >20</small>m</button>
                <button className='rounded-full hover:bg-blue-700 hover:text-white focus:outline-none focus:bg-blue-700 focus:text-white bg-white px-1 py-2 lg:px-2 lg:py-3 md:px-1 md:py-1 text-2xs '><small className='lg:text-2xl md:text-xl text-xl font-bold' onClick={(e)=> eventHandle(e.target.innerText)} >30</small>m</button>
                <button className='rounded-full hover:bg-blue-700 hover:text-white focus:outline-none focus:bg-blue-700 focus:text-white bg-white px-1 py-2 lg:px-2 lg:py-3 md:px-1 md:py-1 text-2xs '><small className='lg:text-2xl md:text-xl text-xl font-bold' onClick={(e)=> eventHandle(e.target.innerText)} >40</small>m</button>
                <button className='rounded-full hover:bg-blue-700 hover:text-white focus:outline-none focus:bg-blue-700 focus:text-white bg-white px-1 py-2 lg:px-2 lg:py-3 md:px-1 md:py-1 text-2xs '><small className='lg:text-2xl md:text-xl text-xl font-bold' onClick={(e)=> eventHandle(e.target.innerText)} >50</small>m</button>
                
                              
            </div>
        </div>

        <div>
            <h1 className='lg:text-2xl md:text-xl text-md font-semibold '> Playing Details </h1>
            <div className='flex justify-between mt-5 py-3 bg-gray-200 px-4 rounded-md'>
                <h1 className='card-title'>Playing time </h1>
                <h1 className='text-xl font-semibold'>{time} <small className=' text-gray-500'>minutes</small></h1>
            </div>
            <div className='flex justify-between mt-5 py-3 bg-gray-200 px-4 rounded-md'>
                <h1 className='card-title'>Break time </h1>
                <h1 className='text-xl font-semibold'> {cartTime} <small className=' text-gray-500'>minutes</small></h1>
            </div>

            <div className="card-actions mt-16 ">
                <button className="btn btn-primary rounded-sm w-full hover:bg-green-500 hover:text-white hover:border-none  " onClick={handleToast} >Activity Completed</button>
                <ToastContainer></ToastContainer>
            </div>

        </div>
    </div>
    );
};

export default Cart;