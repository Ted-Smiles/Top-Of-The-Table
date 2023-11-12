import React from 'react'
import '../App.css'
import './HomePage.css'
import { Button } from './Button'



function HomePage() {
    var i = 2
    function changeImagePlus() { 
        i += 1
        if (i >= 6) {
            i = 1
        } else {
            i = i
        }
        var container = document.getElementsByClassName("home-container")[0]
        container.style.background = 'url("./images/mainPage'+i+'.png") center center/cover no-repeat'
    }
    function changeImageMinus() {  
        i -= 1
        if (i <= 0) {
            i = 5
        } else {
            i = i
        }
        var container = document.getElementsByClassName("home-container")[0]
        container.style.background = 'url("./images/mainPage'+i+'.png") center center/cover no-repeat'     
    }

    return (
        <div className='home-container'>
            <img className='logo' src='images/Logo.png'/>
            <div className='try'>
                <div className='first'><Button className='left' buttonSize='btn--large' buttonStyle='btn--secondary' onClick={changeImageMinus}>Back</Button></div>
                <div className='second'><Button className='right' buttonSize='btn--large' buttonStyle='btn--primary' onClick={changeImagePlus}>Next</Button></div>
            </div>
            <h1>TOPOFTHETABLE.UK</h1>
            <p>Independent minature painter based in the UK</p>
        </div>

  )
}


export default HomePage