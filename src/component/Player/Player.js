import React from 'react';

const Player = (props) => {

    const {img, name,description, age, timeRequired} = props.player
    return (
        <div>
            <div className="card w-64 bg-base-100 shadow-2xl p-5 ">
                    <figure><img className='h-32 w-full rounded-lg' src={img} alt="Shoes" /></figure>
                <div className="card pt-4">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>For age : {age}</p>
                    <p>Time Required : {timeRequired} m</p>
                    <div className="card-actions my-4 ">
                        <button onClick={()=> props.handleAddButton(timeRequired) } className="btn btn-primary rounded-sm w-full ">Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;