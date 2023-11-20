import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import './BlogSection.css';

export default function SinglePage() {
    return (
        <div className='blog'>
            <h1>Recent Posts</h1>
            <h2>The focus of this project was to create a striking scheme that could be painted quickly across the entire horde that the cults represent.</h2>
            <div className="blog__container">
                <div className="blog__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="./images/P1020221.jpg"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="./images/P1020221.jpg"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}