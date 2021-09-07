import React from 'react';
import Design from '../../media/design.svg';
import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <p>&#60;ed8en/&#62;</p>
            <img className="design" src={Design} alt="" />
            <p id="text">design</p>
        </div>
    )
}

export default Footer;
