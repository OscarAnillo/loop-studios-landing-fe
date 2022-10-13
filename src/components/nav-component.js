export default function NavComponent(){
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
                    <li>support</li>
                </ul>
            </div>
            <div>
                <img src="/images/icon-hamburger.svg" alt="" />
            </div>
        </nav>
    )
}