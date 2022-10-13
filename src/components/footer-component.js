export default function FooterComponent(){
    return (
        <footer className="footer">
            <div>
                <img src="/images/logo.svg" alt="" />
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
            <div className="socials">
                <img src="/images/icon-facebook.svg" alt="" />
                <img src="/images/icon-twitter.svg" alt="" />
                <img src="/images/icon-pinterest.svg" alt="" />
                <img src="/images/icon-instagram.svg" alt="" />
            </div>
            <p>© 2022 Loopstudios. All rights reserved.</p>
        </footer>
    )
}