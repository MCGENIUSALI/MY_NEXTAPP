"use client"
import { useState } from 'react';
import React from 'react'

const Jeu = () => {

    const [number, setNumber] = useState(0);

    const Increment = () => {
        setNumber(number + 1);
    }

  return (
    <>
    <div>
        {number}
    </div>
    <button onClick={() => Increment()}>Incremnt</button>
    </>
  )
}

export default Jeu
