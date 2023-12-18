import React, { useEffect, useState } from 'react';
import '../App.css';
import './HomePage.css';
import { Button } from './Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
    const totalImages = 5;
    const [imageIndex, setImageIndex] = useState(1);
    const [isTransitioning, setTransitioning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    };

    const handleArrowClickDebounced = debounce((direction) => {
        if (isTransitioning) return; // Ignore clicks while transitioning

        setTransitioning(true); // Start transitioning
        clearInterval(intervalId); // Clear the existing interval

        if (direction === 'left') {
            setImageIndex(prevIndex => (prevIndex <= 1 ? totalImages : prevIndex - 1));
        } else {
            setImageIndex(prevIndex => (prevIndex >= totalImages ? 1 : prevIndex + 1));
        }

        // Set up a new interval after changes
        const newIntervalId = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex >= totalImages ? 1 : prevIndex + 1));
        }, 6000);

        setIntervalId(newIntervalId);
    }, 500);


    const handleDotClick = (index) => {
        // Handle dot click to navigate directly to a specific image
        setTransitioning(true); // Start transitioning
        clearInterval(intervalId); // Clear the existing interval

        setImageIndex(index);

        // Set up a new interval after changes
        const newIntervalId = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex >= totalImages ? 1 : prevIndex + 1));
        }, 6000);

        setIntervalId(newIntervalId);
    };

    useEffect(() => {
        // Set up the initial interval
        const initialIntervalId = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex >= totalImages ? 1 : prevIndex + 1));
        }, 6000);

        setIntervalId(initialIntervalId);

        return () => clearInterval(initialIntervalId); // Cleanup the initial interval on component unmount
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    const handleTransitionEnd = () => {
        setTransitioning(false); // End transitioning when the CSS transition ends
    };

    const backgroundStyle = {
        background: `url("./images/mainPage${imageIndex}.png") center center/cover no-repeat`,
        transition: 'background 2s ease'
    };

    const indicatorStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
    };

    const dots = Array.from({ length: totalImages }, (_, index) => {
        const isActive = imageIndex === index + 1;
        const isNeighbor = Math.abs(imageIndex - (index + 1)) <= 1;;

        let dotClassName = 'dot';
        if (isActive) dotClassName += ' active';
        if (isNeighbor) dotClassName += ' neighbor';

        return (
            <div
                key={index}
                className={dotClassName}
                onClick={() => handleDotClick(index + 1)}
            />
        );
    });

    return (
        <div>
            <div className='home-container' style={backgroundStyle} onTransitionEnd={handleTransitionEnd}>
                <img className='logo' src='images/Logo.png' alt='Logo'/>
                <h1>TOPOFTHETABLE.UK</h1>
                <p>Independent miniature painter based in the UK</p>
                <div className='try'>
                    <div className='first'><Button buttonSize='btn--large' buttonStyle='btn--secondary' onClick={() => handleArrowClickDebounced('left')}><FontAwesomeIcon icon={faChevronLeft}/></Button></div>
                    <div className='second'><Button buttonSize='btn--large' buttonStyle='btn--secondary' onClick={() => handleArrowClickDebounced('right')}><FontAwesomeIcon icon={faChevronRight}/></Button></div>
                </div>
                <div style={indicatorStyle}>{dots}</div>
            </div>
            
        </div>
    );
}

export default HomePage;
