import React, { useState, useCallback } from 'react'
import { useEffect } from 'react/cjs/react.development';
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState( 10 );

    // const incrementar = () => {
    //     setCounter(counter +1);
    // }

    const incrementar = useCallback((qtt)=> {
        setCounter(c => c+qtt)
    },[setCounter])

    useEffect(()=>{
        //????
    },[incrementar])

    return (
        <div>
            <h1> useCallback Hook { counter } </h1>
            <hr />
            <ShowIncrement increment={incrementar} />
        </div>
    )
}
