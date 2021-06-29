import React,{useState} from 'react'
import './Header.scss'
import { Twirl as Hamburger } from 'hamburger-react'



const Header = () => {
    const [style, setStyle] = useState('hide-nav')
    return (
      <>
      <div className="navbar">
        <div className={`nav-section ${style}`}>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/project">Project</a></li>
              </ul>
            </nav>
          </div>
          <div className="toggle-section">
          <Hamburger onToggle={toggled => {
            if (toggled) {
              // open a menu
              setStyle('show-nav')
            } else {
              // close a menu
              setStyle('hide-nav')
            }
          }} />
          </div>
        </div>
      </>
    )
}

export default Header
