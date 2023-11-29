import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

/**
 * Cards for Gallery page using CardItems
 */

function Cards2() {
    return (
        <div className='cards'>
            <h1>All Photos</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="./images/P1020196.jpg"
                            title="Tabletop"
                            text="Battle Ready"
                        />
                        <CardItem 
                            src="./images/P1020217.jpg"
                            title="Hi"
                            text="Tabletop"
                        />
                        <CardItem 
                            src="./images/paradeGround.jpg"
                            text="Parade Ground"
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