import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    return (
        <>
            <li className='cards__item'>
                <Link className="cards__item__link" to={props.path}>
                    <figure className='cards__item__pic-wrap'>
                        <img src={props.src} alt="Miniture" className="cards__item__img" />
                    </figure>
                    <figure className='cards__item__text-wrap' data-category={props.label}>
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