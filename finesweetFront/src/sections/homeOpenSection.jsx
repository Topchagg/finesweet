
import '../styles/homeOpenSection.css'

function HomeOpenSection () {
    return (
        <div className="home-open-section">
            <div className="title-info-wrapper">
                <div className="title-wrapper header-one">
                    Get your vehicle service done online at one place
                </div>
                <div className="info-wrapper">
                    <div className="info-caption caption">
                        We are open
                    </div>
                    <div className="info-text body-text-small">
                        Monday to Friday 9:00 AM to  10:00  AM
                    </div>
                </div>
            </div>
            <div className="img-wrapper">
                <img src="homeopenimage.png" alt="" />
            </div>
        </div>
    )
}

export default HomeOpenSection