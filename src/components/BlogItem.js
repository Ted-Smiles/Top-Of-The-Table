import React from 'react'
import { Link } from 'react-router-dom'

function BlogItem({title, coverPhoto, datePublished, slug}) {
  return (
    <>
        <li className='blogs__item'>
            <Link className="blogs__item__link" to={props.path}>
                <figure className='blogs__item__pic-wrap' data-category={props.label}>
                    <img src={props.src} alt="Miniture" className="blogs__item__img" />
                </figure>
                <div className="blogs__item__info">
                    <h5 className="blogs__item__text">{props.text}</h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default BlogItem