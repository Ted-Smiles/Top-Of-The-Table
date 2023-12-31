import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

/**
 * Main page cards for 
 */

function Cards() {
  return (
    <div className='cards'>
        <h1>Featured Products</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src="./images/P1020196.jpg"
                        title="Battle Ready"
                        text="Find Out More"
                        path="/services"
                    />
                    <CardItem 
                        src="./images/P1020217.jpg"
                        title="Tabletop"
                        text="Find Out More"
                        path="/services"
                    />
                    <CardItem 
                        src="./images/paradeGround.jpg"
                        title="Parade Ground"
                        text="Find Out More"
                        path="/services"
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                        src="./images/P1020196.jpg"
                        title="More About Me"
                        text="Hi, I'm Charles, a miniature painter based in the UK. I create youtube video and am available for comission.
                        My background is in Warhammer 40K, however I am more than happy to talk about any project.
                        Feel free to scroll through the gallery, check my blog and dont hesitate to reach out if you have any questions.
                        
                        I got back into minature painting in 2020 as part of a lockdown project, this was after about a 10 year break - since then I have rediscovered my passion for painting and strived to improve to my current level, with no plans to stop!
                        "
                        path="/services"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards