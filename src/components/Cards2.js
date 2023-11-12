import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards2() {
  return (
    <div className='cards'>
        <h1>Featured Products</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src="./images/P1020196.jpg"
                        text="Battle Ready"
                        path="/services"
                    />
                    <CardItem 
                        src="./images/P1020217.jpg"
                        text="Tabletop"
                        path="/services"
                    />
                    <CardItem 
                        src="./images/paradeGround.jpg"
                        text="Parade Ground"
                        path="/services"
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                        src="./images/P1020221.jpg"
                        text="..."
                        path="/services"
                    />
                    <CardItem 
                        src="./images/P1020222-2.jpg"
                        text="..."
                        path="/services"
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                        src="./images/P1020229.jpg"
                        text="More About Me"
                        path="/services"
                    />
                    <CardItem 
                        src="./images/P1020322.jpg"
                        text="More About Me"
                        path="/services"
                    />
                    <CardItem 
                        src="./images/mainPage.jpg"
                        text="More About Me"
                        path="/services"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards2