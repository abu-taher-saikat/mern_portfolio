import React from 'react'
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import twit from '../assets/Group.png'
import linkedin from '../assets/Linkedin.png'
import './Footer.scss';


const Footer = () => {
    return (
        <div>
                        {/* footer */}
        <footer className="footer">
            <div className="logo">
                <ul>
                    <li><a href="/"><img src={fb} alt="" /></a></li>    
                    <li><a href="/"><img src={insta} alt="" /></a></li>
                    <li><a href="/"><img src={twit} alt="" /></a></li>
                    <li><a href="/"><img src={linkedin} alt="" /></a></li>
                </ul>
            </div>
            <h3>Copyright ©2021 All rights reserved </h3>
        </footer>
        </div>
    )
}

export default Footer
