import React from 'react';
import '../App.css';
import './HomePage.css';
import { Button } from './Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


function HomePage() {
    var i = 2
    var b = 1

    function changeImagePlus() { 
        i += 1
        if (i >= 6) {
            i = 1
        } else {
            
        }
        var container = document.getElementsByClassName("home-container")[0]
        container.style.background = 'url("./images/mainPage'+i+'.png") center center/cover no-repeat'
    }
    function changeImageMinus() {  
        i -= 1
        if (i <= 0) {
            i = 5
        } else {
            
        }
        var container = document.getElementsByClassName("home-container")[0]
        container.style.background = 'url("./images/mainPage'+i+'.png") center center/cover no-repeat'   
    }

    var changeBackground = setInterval(function() {
        
        var container = document.getElementsByClassName("home-container")[0]
        b = 0 
        if (window.location.pathname == '/') {
            console.log(b)
            if (b > 0) {
                container.style.background = 'url("./images/mainPage'+i+'.png") center center/cover no-repeat'   
            
                i += 1
            
                if (i >= 6) {
                    i = 1
                }
            } else {
                clearInterval(changeBackground)
            }
        } else {
        b = 0 
        }

    }, 8000)

    console.log(b)

    return (
        <div className='home-container'>
            <img className='logo' src='images/Logo.png' alt='Logo'/>
            <h1>TOPOFTHETABLE.UK</h1>
            <p>Independent minature painter based in the UK</p>
            <div className='try'>
                <div className='first'><Button buttonSize='btn--large' buttonStyle='btn--secondary' onClick={changeImageMinus}><FontAwesomeIcon icon={faChevronLeft}/></Button></div>
                <div className='second'><Button buttonSize='btn--large' buttonStyle='btn--secondary' onClick={changeImagePlus}><FontAwesomeIcon icon={faChevronRight}/></Button></div>
            </div>
        </div>
    )
}


export default HomePage