import React, { useState, useEffect } from 'react';
import './App.css';

function RandomColor() {
    const [color, setColor] = useState('rgb(255, 255, 255)');
    const [colorHistory, setColorHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [isAutoChanging, setIsAutoChanging] = useState(false);

    const value = () => Math.floor(Math.random() * 256);

    const changeColor = () => {
        const newColor = `rgb(${value()}, ${value()}, ${value()})`;
        setColor(newColor);
        const newHistory = [...colorHistory.slice(0, historyIndex + 1), newColor];
        setColorHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
    };

    const undoColor = () => {
        if (historyIndex >= 0) {
            const newHistory = colorHistory.slice(0, historyIndex);
            setColorHistory(newHistory);
            setHistoryIndex(newHistory.length - 1);
            if (newHistory.length > 0) {
                setColor(newHistory[newHistory.length - 1]);
            } else {
                setColor('rgb(255, 255, 255)');
            }
        }
    };

    const startAutoChange = () => {
        setIsAutoChanging(true);
        
        const changeColorAndContinue = () => {
                if (isAutoChanging) {
                changeColor();
                setTimeout(changeColorAndContinue, 100);
            };
        };
        changeColorAndContinue();
    };

    const stopAutoChange = () => {
        setIsAutoChanging(false); 
    };

    useEffect(() => {
        return () => {
            stopAutoChange(); 
        };
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <div className="color-sample" style={{ backgroundColor: color }}></div>
            <h1 className="color-title">Current Color: {color}</h1>
            <button className="button" onClick={changeColor}>
                Change Color
            </button>
            <button className="button" onClick={undoColor} disabled={historyIndex < 0}>
                Undo
            </button>
            <button className="button" onClick={isAutoChanging ? stopAutoChange : startAutoChange}>
                {isAutoChanging ? 'Stop Auto Change' : 'Start Auto Change'}
            </button>
            <h3>Color History:</h3>
            <ul className="color-history">
                {colorHistory.map((c, index) => (
                    <li key={index} className="color-item">
                        <div
                            className="color-history-sample"
                            style={{ backgroundColor: c }}
                        ></div>
                        <span style={{ color: c }}>{c}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RandomColor;
