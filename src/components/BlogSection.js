import React from 'react'
import CardItem from './CardItem'
import './Cards.css';


function BlogSection() {
  return (
    <div className='cards'>
        <h1>Recent Posts</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src="./images/P1020196.jpg"
                        label="12/09/2023"
                        text="A Double Header"
                        path="/contact"
                    />
                    <CardItem 
                        src="./images/P1020217.jpg"
                        label="05/09/2023"
                        text="Goonhammer Open"
                        path="/contact"
                    />
                    <CardItem 
                        src="./images/paradeGround.jpg"
                        label="28/08/2023"
                        text="Hellstorm All Stars 4"
                        path="/contact"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default BlogSection