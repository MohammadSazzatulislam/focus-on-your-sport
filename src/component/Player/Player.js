import React from 'react';

const Player = (props) => {

    const {img, name,description, age, timeRequired} = props.player
    return (
            <div className="card lg:w-60 md:w-48 w-full rounded-md sm:w-full bg-base-100 shadow-2xl p-4 mx-auto ">
                    <figure><img className='h-32 w-full rounded-md' src={img} alt="Shoes" /></figure>
                <div className="card pt-4">
                    <h2 className=" text-xl font-bold">{name}</h2>
                    <small className='text-gray-500 '>{description}</small>
                    <p className='font-semibold'>For age : {age}</p>
                    <p className='font-semibold'>Time Required : {timeRequired} m</p>
                    <div className="card-actions my-4 ">
                        <button onClick={()=> props.handleAddButton(timeRequired) } className="btn btn-primary rounded-sm w-full hover:bg-green-500 hover:text-white hover:border-none ">Add to list</button>
                    </div>
                </div>
            </div>
    );
};

export default Player;