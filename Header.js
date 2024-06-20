import React, { useEffect, useState } from 'react';

const Header = () => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [battery, setBattery] = useState(85);
    
    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const formattedTime = `${hours % 12 || 12}:${minutes} ${ampm}`;
            setTime(formattedTime);

            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const dayOfWeek = days[now.getDay()];
            const month = months[now.getMonth()];
            const date = now.getDate();
            const formattedDate = `${dayOfWeek}, ${date} ${month}`;
            setDate(formattedDate);
        };

        const updateBatteryPercentage = () => {
            // Simulated battery value (you should replace this with real data)
            const batteryValue = Math.floor(Math.random() * (100 - 70 + 1)) + 70;
            setBattery(batteryValue);
        };

        updateDateTime();
        updateBatteryPercentage();
        
        const intervalId = setInterval(() => {
            updateDateTime();
            updateBatteryPercentage();
        }, 60000); // 60000 milliseconds = 1 minute

        return () => clearInterval(intervalId);
    }, []);

    return (
        <header className="header">
            <div className="left-section">
                <div className="time-date-weather hidden fade-in-time-date">
                    <div className="time-date">
                        <p id="time">{time}</p>
                        <p id="date">{date}</p>
                    </div>
                    <div className="weather">
                        <p id="weather-icon"><img src="/images/Vector (6).svg" alt="" /></p>
                        <p id="temperature">23°C / 27°C</p>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div className="connectivity-icons hidden fade-in-connectivity">
                    <div className="icon" style={{ backgroundImage: "url('/images/Vector (4).svg')" }}></div>
                    <div className="icon" style={{ backgroundImage: "url('/images/Vector (5).svg')" }}></div>
                    <div className="icon" style={{ backgroundImage: "url('/images/Union (3).svg')" }}></div>
                </div>
                <div className="battery-info-bar hidden fade-in-battery-info">
                    <div className="battery-info">
                        <div className="remaining">
                            <span className="remaining-km" id="distance">204</span><span className="unit">km</span>
                            <div className="remaining-text">Remaining</div>
                        </div>
                        <div className="battery">
                            <span className="battery-percentage" id="battery">{battery}</span><span className="unit">%</span>
                            <div className="battery-text">Battery</div>
                        </div>
                        <div className="average">
                            <span className="avg-wh" id="average">128</span><span className="unit">Wh/km</span>
                            <div className="average-text">Average</div>
                        </div>
                    </div>
                    <div className="battery-bar-container">
                        <div className="battery-bar-base">
                            <div className="battery-bar-fill" style={{ height: `${battery}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
