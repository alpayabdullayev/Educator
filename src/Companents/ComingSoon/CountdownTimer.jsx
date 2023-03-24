import React, { useState, useEffect } from 'react';
import '../ComingSoon/CountdownTime.css';

const CountdownTimer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [targetDate, setTargetDate] = useState(new Date('2023-03-30T00:00:00'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getTimeRemaining = () => {
    const total = Date.parse(targetDate) - Date.parse(currentTime);
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  };

  const { days, hours, minutes, seconds } = getTimeRemaining();

  return (
    <div className="countdown-timer-container">
      <div className="countdown-timer row">
        <div className="countdown-timer-item col-6 col-md-3">
          <div className="countdown-timer-item-value">{days < 10 ? '0' + days : days}</div>
          <div className="countdown-timer-item-label">Days</div>
        </div>
        <div className="countdown-timer-item col-6 col-md-3">
          <div className="countdown-timer-item-value">{hours < 10 ? '0' + hours : hours}</div>
          <div className="countdown-timer-item-label">Hours</div>
        </div>
        <div className="countdown-timer-item col-6 col-md-3">
          <div className="countdown-timer-item-value">{minutes < 10 ? '0' + minutes : minutes}</div>
          <div className="countdown-timer-item-label">Minutes</div>
        </div>
        <div className="countdown-timer-item col-6 col-md-3">
          <div className="countdown-timer-item-value">{seconds < 10 ? '0' + seconds : seconds}</div>
          <div className="countdown-timer-item-label">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
