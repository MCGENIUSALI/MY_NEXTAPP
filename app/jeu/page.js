"use client"
import { useEffect, useState } from 'react';
import React from 'react'

const Jeu = () => {

    const [number, setNumber] = useState(0);

    const Increment = () => {
        setNumber(number + 1);
    }
    const Decrement = () => {
        setNumber(number - 1);
    }

    useEffect (() => {
        alert("yo keba")
    },[number])

  return (
    <>
    <div>
        {number}
    </div>
    <button onClick={() => Increment()}>Incremnt</button>
    <button onClick={() => Decrement()}>Decremnt</button>
    </>
  )
}

export default Jeu
