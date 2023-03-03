import React, { useContext } from 'react';
import { contextApi } from '../Context/Context';
import './counter.css';

const Counter = () => {

    const {counter, increment, decrement} = useContext(contextApi);
    return (
        <div className='counter'>
            <div className='counterone'>
            <h2>{counter}</h2>
            <button className='btn-increment' onClick={increment}>+</button>
            <button className='btn-decrement'  onClick={decrement}>-</button>
            </div>
        </div>
    );
};

export default Counter;