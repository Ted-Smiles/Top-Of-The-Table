import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import './BlogSection.css';

export default function GallerySection() {
    return (
        <div className='cards'>
            <h1>Recent Posts</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="./images/P1020221.jpg"
                            title="Genestealer Cults"
                            path="/genstealer-cult"
                        />
                        <CardItem 
                            src="./images/P1020222-2.jpg"
                            title="Project Leviathan"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="./images/P1020221.jpg"
                            title="Death Korps Of Krieg"
                            path="/services"
                        />
                        <CardItem 
                            src="./images/P1020222-2.jpg"
                            title="Chaos Daemons"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}