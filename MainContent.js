import React from 'react';

const MainContent = () => {
    return (
        <main className="main-content">
            <div className="car-diagnostics">
                <img src="/images/diagnostics.png" alt="Car Diagnostics" className="car-image hidden fade-in-car-image" />
                <p className="hidden fade-in-text">Running background checks...</p>
                <div className="status-dots hidden fade-in-dots">
                    <span className="dot green"></span>
                    <span className="dot yellow"></span>
                    <span className="dot yellow"></span>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
