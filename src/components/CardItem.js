import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FullscreenImageModal.css'; // Import your CSS file for styling

const CardItem = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Prevent scrolling when the modal is open
            if (isModalOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'visible';
            }
        };

        const handleEscapeKey = (event) => {
            // Close the modal when the "Escape" key is pressed
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        // Attach the event listeners when the modal is open
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('keydown', handleEscapeKey);
        }

        // Cleanup the event listeners on component unmount or when the modal is closed
        return () => {
            document.body.style.overflow = 'visible';
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isModalOpen]);

    const openModal = () => {
        if (props.enableFullscreen) {
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <li className='cards__item'>
                {props.enableFullscreen ? (
                    <div className="cards__item__link" onClick={openModal}>
                        <figure className='cards__item__pic-wrap'>
                            <img src={props.src} alt={props.alt} className="cards__item__img" onClick={props.onClick}/>
                        </figure>
                        <figure className='cards__item__text-wrap'>
                            <div className="cards__item__info">
                                <h3 className="cards__item__title">{props.title}</h3>
                                {props.date && <h4 className="cards__item__date">{props.date}</h4>}
                                <h5 className="cards__item__text"><br />{props.text}</h5>
                                {props.action && <h5 className="cards__item__read">{props.action}</h5>}
                            </div>
                        </figure>
                    </div>
                ) : (
                    <Link to={props.path} className="cards__item__link">
                        <figure className='cards__item__pic-wrap'>
                            <img src={props.src} alt={props.alt} className="cards__item__img" />
                        </figure>
                        <figure className='cards__item__text-wrap'>
                            <div className="cards__item__info">
                                <h3 className="cards__item__title">{props.title}</h3>
                                {props.date && <h4 className="cards__item__date">{props.date}</h4>}
                                <h5 className="cards__item__text"><br />{props.text}</h5>
                                {props.action && <h5 className="cards__item__read">{props.action}</h5>}
                            </div>
                        </figure>
                    </Link>
                )}
            </li>

            {isModalOpen && (
                <div className="fullscreen-overlay">
                    <div className="fullscreen-modal">
                        <span className="close-modal" onClick={closeModal}>&times;</span>
                        <img src={props.src} alt={props.alt} className="fullscreen-image" />
                    </div>
                </div>
            )}
        </>
    );
    }
    
    export default CardItem;
    
