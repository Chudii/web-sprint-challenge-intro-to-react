// Write your Character component here
import React from 'react';

const Character = (props) => {
    const { name, height, gender, birth, eyeColor } = props;

    return (
        <div className={name}>
            <h2>{name}</h2>
            <h3>{gender}</h3>
            <div className='details'>
                <p>{birth}</p>
                <p>{height}</p>
                <p>{eyeColor}</p>
            </div>
        </div>
    );
}

export default Character;
