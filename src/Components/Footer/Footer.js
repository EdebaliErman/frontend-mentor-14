import React from 'react'
import "./Footer.css"
import PriceBox from './PriceBox/PriceBox'
import InfoBox from './InfoBox/InfoBox'
function Footer({data}) {
    return (
        <footer>
            <PriceBox />
            <InfoBox box={data.info} />
        </footer>
    )
}

export default Footer
