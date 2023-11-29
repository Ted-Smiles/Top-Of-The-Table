import React from 'react'
import './Button.css'

/**
 * Buttons of various styles and sizes which can be called in other components
 */

const STYLES = ['btn--primary', 'btn--secondary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => { 
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle 
    : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0]

    return (
        <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
            onClick={onClick} 
            type={type}
        >
            {children}
        </button>
    )
}