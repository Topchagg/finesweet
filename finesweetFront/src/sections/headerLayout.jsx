
import '../styles/header.css'


function HeaderLayout () {
    return (
        <header className="header section">
            <div className="content__container">
                <div className="header-nav-section">
                    <div className="logo-wrapper header-one">
                        finSweet!
                    </div>
                    <div className="nav-items-wrapper">
                        <div className="nav__item body-text-big">Home</div>
                        <div className="nav__item body-text-big">About us</div>
                        <div className="nav__item body-text-big">Services</div>
                        <div className="nav__item body-text-big">Blog</div>
                        <div className="nav__item body-text-big">Contact</div>
                    </div>
                    <div className="contact-info">
                        <div className='caption'>Road assistance</div>
                        <div className="body-text-small">1800 265 24 52</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderLayout