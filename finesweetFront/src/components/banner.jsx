import { Link } from 'react-router-dom'

import BlackButton from './blacButton'

import '../styles/banner.css'

function Banner() {
    return (
        <div className="banner-wrapper">
            <div className="banner-img-wrapper"><img className='banner-img' src="bannerimgf.png" alt="" /></div>
            <div className="get-touch-block">
                <div className="banner-title-wrapper header-three">Get in touch with us for your service related query</div>
                <div className="banner-btn-wrapper">
                    <Link to="/contact"><BlackButton  text={"Contact us"}/></Link>
                </div>
            </div> 
            <div className="banner-img-wrapper"><img className='banner-img' src="bannerimgs.png" alt="" /></div>
        </div>
    )
}

export default Banner