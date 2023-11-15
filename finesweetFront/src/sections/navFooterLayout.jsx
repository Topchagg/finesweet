import { Link } from "react-router-dom"

function NavFooterLayout () {
    return (
                <div className="nav-footer">
                    <div className="footer-nav-section black-color">
                        <div className="logo-wrapper header-one">
                            finSweet!
                        </div>
                        <div className="nav-items-wrapper">
                            <Link to="/"><div className="nav__item body-text-big">Home</div></Link>
                            <Link to="about-us"><div className="nav__item body-text-big">About us</div></Link>
                            <Link to="services"><div className="nav__item body-text-big">Services</div></Link>
                            <div className="nav__item body-text-big">Blog</div>
                            <Link to="contact"><div className="nav__item body-text-big">Contact</div></Link>
                        </div>
                        <div className="copyrights caption">
                            @ Copyright Finsweet 2021    
                        </div>
                    </div>
                </div>
    )
}

export default NavFooterLayout