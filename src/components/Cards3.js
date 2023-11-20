import React from 'react'
import CardItem from './CardItem'
import './Cards.css';


function Cards3() {
  return (
    <div className='cards'>
        <h1>Commission Levels</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src="./images/P1020196.jpg"
                        title="Battle Ready"
                        text="Want to get tournament ready and fast? This is the option for you, three distinct colours using an airbrush and speedpainting techniques for the base colours and details picked out in single colours."
                        path="/contact"
                    />
                    <CardItem 
                        src="./images/P1020217.jpg"
                        title="Tabletop Standard"
                        text="This level is the natural progression from the previous level. Using techniques like washes and drybrushing to add depth. This will let your models look great on the tabletop when you use them."
                        path="/contact"
                    />
                    <CardItem 
                        src="./images/paradeGround.jpg"
                        title="Tabletop Plus"
                        text="This level is to create an model that looks good on the table and in your hand. Leveraging the airbrush to add more tones to the base, each of the details will be picked out in an appropriate colour. More extensive highlighting and shading and edge highlights will be included."
                        path="/contact"
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                        src="./images/P1020221.jpg"
                        title="Hero Level"
                        text="Truly make your models stand out with this level - from here highlights and details are much more focused, using multiple colours to step up through smooth and clear highlights adding that something extra to your model. With Decals and basic weathering"
                        path="/contact"
                    />
                    <CardItem 
                        src="./images/P1020222-2.jpg"
                        title="Centrepiece"
                        text="Pull out all the stops with this and create something special, fit to display on the shelf when not on the table, this level includes advanced weathering and decals with each highlight using at least 3 colours and glazing to graduate throughout."
                        path="/contact"
                    />
                    <CardItem 
                        src="./images/P1020229.jpg"
                        title="Custom"
                        text="If you want to discuss something completely bespoke we can absolutely have that discussion - please reach out through the contact form and we can work it through."
                        path="/contact"
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                        src="./images/P1020229.jpg"
                        title="The Results"
                        text='"Fantastic, just the thing I needed to lead my army on the tabletop"'
                        path="/contact"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards3