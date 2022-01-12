import React from 'react'
import { useState, useEffect } from 'react'

const date = new Date()
const Time = () => {
    const [dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes()
    });
    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setDateTime({
                hours: date.getHours(),
                minutes: date.getMinutes()
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    
    return (
        <div>
            <div className='time'>
                {dateTime.hours}:{dateTime.minutes}
            </div>
        </div>
    )
}

export default Time
