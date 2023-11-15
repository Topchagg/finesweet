
import '../styles/ChoiceServiceSection.css'

function ChoiceServiceSection() {
    return (
        <div className="choice-service-section" id="choice-service">
            <div className="choice-service-content-block">
                <div className="info-about-service-wrapper">
                    <div className="info-service-img-wrapper">
                        <img src="service-img.png" alt="" />
                    </div>
                    <div className="name-of-service header-three">
                        Auto diagnostic
                    </div>
                    <div className="tittle-description-service caption">
                    Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic. Through True Rich Attended does no end it his mother. 
                    </div>
                    <div className="service-arrow-wrapper">
                        See service details! <img className='arrow' src="Arrow.png" alt="" />
                    </div>
                </div>
                <div className="other-service-wrapper">
                    <div className="other-service-block">
                        
                    </div>
                    <div className="carousel-wrapper">
                        <div className="buttons-wrapper">
                            <div className="to-left-btn carousel-btn">{'<<'}</div>
                            <div className="to-right-btn carousel-btn">{'>>'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChoiceServiceSection