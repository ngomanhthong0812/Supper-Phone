import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function Countdown() {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00'); 
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('May 28, 2024 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      console.log(days);

      if(distance < 0) {
        clearInterval(interval.current)
      }else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current)
    };
  });

  return (
    <div>
        <div className='count-down'>
            <div className='timer-view flex items-center gap-[5px]'>
                <div className='block-timer w-[50px] h-[50px] bg-[#141414] flex flex-col justify-center rounded-[5px] p-[5px] text-center'>
                    <p className='text-[#ffffff] font-black'>{timerDays}</p>
                    <span className='text-[#ffffff] text-sm'>Ngày</span>
                </div>

                <div className='block-timer w-[50px] h-[50px] bg-[#141414] flex flex-col justify-center rounded-[5px] p-[5px] text-center'>
                    <p className='text-[#ffffff] font-black'>{timerHours}</p>
                    <span className='text-[#ffffff] text-sm'>Giờ</span>
                </div>

                <div className='block-timer w-[50px] h-[50px] bg-[#141414] flex flex-col justify-center rounded-[5px] p-[5px] text-center'>
                    <p className='text-[#ffffff] font-black'>{timerMinutes}</p>
                    <span className='text-[#ffffff] text-sm'>Phút</span>
                </div>

                <div className='block-timer w-[50px] h-[50px] bg-[#141414] flex flex-col justify-center rounded-[5px] p-[5px] text-center'>
                    <p className='text-[#ffffff] font-black'>{timerSeconds}</p>
                    <span className='text-[#ffffff] text-sm'>Giây</span>
                </div>
            </div>
        </div>
    </div>
  )
}
