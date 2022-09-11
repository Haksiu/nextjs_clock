import React, { useState, useEffect } from 'react'

const Clock = () => {

    const [clock, setClock] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClock(date.toLocaleTimeString())
        }, 1000);
    }, [])


    const stopTime = () => {
        const date = new Date();
        clearInterval();
        setClock(date.toLocaleTimeString());
    };

  return (
    <div className='flex justify-center items-center p-[16px] '>
    <main className='flex justify-center items-center text-[24px] font-bold text-white shadow-xl bg-gray-600 max-w-[450px] min-h-[300px] rounded-[12px] p-[16px]'>
        <div >
        Digital Clock: <span className="text-green-400">{clock}</span> 
       
        </div>
    </main>
    </div>
  )
}

export default Clock