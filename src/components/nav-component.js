import { useState } from 'react';

export default function NavComponent(){
    const [showMenu, setShowMenu] = useState(false);

    const clickHandlerOpen = () => {
        setShowMenu(true)
    }
    const clickHandlerClose = () => {
        setShowMenu(false)
    }
    return (
        <nav className="nav">
            <div>
                <img src="/images/logo.svg" alt="" />
            </div>
            <div className="nav-desktop">
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                </ul>
            </div>
            <div onClick={clickHandlerOpen} className="nav-mobile">
                <img src="/images/icon-hamburger.svg" alt="" />
            </div>
            {showMenu ? 
            <div className='mobile-inner-menu'>
            <div className='mobile-inner-menu-row'>
                <div>
                    <img src="/images/logo.svg" alt="" />
                </div>
                <div>
                    <img src="/images/icon-close.svg" alt="" onClick={clickHandlerClose}/>
                </div>
            </div>
            <div>
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                </ul>
            </div>
            </div>
            : ''}
        </nav>
    )
}