import React from 'react'
import '../App.css'
import './PricingGuide.css'

/**
 * Final section of the sevices page with text detailing the pricing
 */

function PricingGuide() {
    return (
        <div className='pricing-container'>
            <h1>Pricing Guide</h1>
            <p>Whilst every commission will be different and can be customised to create the best product for you, please reach out for an initial quote. Basing and building can be included for an additional fee.</p>
            <h3>Paints And Materials</h3>
            <p>The price relate to labour and equipment costs. Paints will be an additional amount calculated and added at the end.  If you have a specific scheme already planned you may want to make use of the following option:</p>
            <p>Have the total costs of all the paints added to the cost but when I ship the commision back to you I include the unused paints in their pots. This option is great if you plan to add to your army yourself and want to maintain consistency.</p>
        </div>
  )
}

export default PricingGuide