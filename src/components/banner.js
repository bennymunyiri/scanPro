import React, { useState, useEffect } from 'react';
import { finaly_cleanup, slide2, slide3, laptop } from "../index";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [currentText, setCurrentText] = useState('');
    const [showImage, setShowImage] = useState(true);
    const [textAnimationTimeout, setTextAnimationTimeout] = useState(null);

    const sentences = [
        'Best in Kenya, state of the art RFID scanners',
        'Stay ahead with our efficient RFID technology',
        'See Our Products Below'
    ];

    const isMobile = window.innerWidth <= 900; // Check if the device is a mobile phone

    const images = isMobile ? [slide3, slide2, finaly_cleanup] : [slide3, slide2, laptop];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setShowImage(false); // Hide image before changing slide
            setCurrentText('');
            setTextAnimationTimeout(null); // Clear any existing text animation timeout
            setTimeout(() => {
                setCurrentSlide((prevSlide) => (prevSlide % 3) + 1);
                setShowImage(true);
            }, 1000);
        }, 10000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(textAnimationTimeout); // Clear the text animation timeout on component unmount
        };
    }, [currentSlide, textAnimationTimeout]);

    useEffect(() => {
        let index = 0;
        const textInterval = setInterval(() => {
            setCurrentText((prevText) => sentences[currentSlide - 1].slice(0, index + 1));
            index++;

            if (index === sentences[currentSlide - 1].length) {
                clearInterval(textInterval);
            }
        }, 100); // Adjust this value to control the typing speed

        setTextAnimationTimeout(textInterval); // Save the timeout ID for clearing later

        return () => clearInterval(textInterval);
    }, [currentSlide]);

    return (
        <div className="banner-container">
            <img
                className={`slideshow-image ${showImage ? 'fade-in' : ''}`}
                src={images[currentSlide - 1]}
                alt={`Slide ${currentSlide}`}
            />
            <div className="text-animation">
                <p>{currentText}</p>
            </div>
        </div>
    );
};

export default Banner;
