
import '../styles/footer.css'

function FooterLayout () {
    return (
        <div className="footer section">
            <div className="content__container">
                <div className="sub-footer">
                    <div className="sub-footer-content">
                        <div className="tittle-social-wrapper">
                            <div className="wrapper-tittle header-three">
                                Get in touch with us for your service
                            </div>
                            <div className="wrapper-social-media">
                                <div className="social-media-item">
                                    <img src="facebook.png" alt="" />
                                </div>
                                <div className="social-media-item">
                                    <img src="instagram.png" alt="" />
                                </div>
                                <div className="social-media-item">
                                    <img src="twitter.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="contact-info-wrapper">
                            <div className="contact-info-item">
                                <div className="caption">Help line number</div>
                                <div className="title-two">1800 265 24 52</div>
                            </div>
                            <div className="contact-info-item">
                                <div className="caption">Address</div>
                                <div className="title-two">NH 234 Public Square San Francisco 65368</div>
                            </div>
                            <div className="contact-info-item">
                                <div className="caption">We are open</div>
                                <div className="title-two">Monday to Friday 9:00 AM to 10:00 AM</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterLayout