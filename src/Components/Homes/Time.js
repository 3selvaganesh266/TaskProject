import React, { useState, useEffect } from 'react';
import '../../Assets/Styles/Time.css';

const Time = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((time) => (time > 0 ? time - 1 : 0));
      }, 1000);
    } else if (isPaused) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const handleStartPause = () => {
    setIsActive(!isActive);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setTime(25 * 60);
  };

  const handleShortBreak = () => {
    setIsActive(false);
    setIsPaused(false);
    setTime(5 * 60);
  };

  const handleLongBreak = () => {
    setIsActive(false);
    setIsPaused(false);
    setTime(15 * 60);
  };

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="pomodoro-timer">2
      <div className="timer-container">
      <h1 style={{fontSize:'70px',marginBottom:'100px'}}>Pomofocus</h1>
        <div className="timer-header">
          <button onClick={handleReset}>Pomodoro</button>
          <button onClick={handleShortBreak}>Short Break</button>
          <button onClick={handleLongBreak}>Long Break</button>
        </div>
        <div className="timer-display">
          <h2>{formatTime(time)}</h2>
        </div>
        <div className="timer-controls">
          <button onClick={handleStartPause}>
            {isActive ? '' : 'Start'}
          </button>
          {isActive && <button onClick={handlePause}>{isPaused ? 'Resume' : 'Pause'}</button>}
        </div>
      </div>
    </div>
  );
};

export default Time;
