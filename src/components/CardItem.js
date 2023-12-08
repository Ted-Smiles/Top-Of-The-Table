import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FullscreenImageModal from './FullscreenImageModal';

/**
 * Creates a card using an image and text which can then link to another page to get more information
 */

function CardItem(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
    setIsModalOpen(true);
    };

    const closeModal = () => {
    setIsModalOpen(false);
    };

    return (
        <>
            <li className='cards__item'>
                <Link className="cards__item__link" to={props.path}>
                    <figure className='cards__item__pic-wrap'>
                        <img src={props.src} alt={props.alt} className="cards__item__img" onClick={openModal}/>
                        <FullscreenImageModal
                            isOpen={isModalOpen}
                            onClose={closeModal}
                            imageUrl={props.src}
                        />
                    </figure>
                    <figure className='cards__item__text-wrap'>
                        <div className="cards__item__info">
                            <h3 className="cards__item__title">{props.title}</h3>
                            <h4 className="cards__item__date">{props.date}</h4>
                            <h5 className="cards__item__text"><br />{props.text}</h5>
                            <h5 className="cards__item__read">{props.action}</h5>
                        </div>
                    </figure>
                </Link>
            </li>
        </>
    )
}

export default CardItem