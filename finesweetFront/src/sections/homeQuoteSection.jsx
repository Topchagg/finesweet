
import Feature from '../components/feature'
import OrangeBtn from '../components/orangeButton'
import RequestForm from '../components/requestForm'

import '../styles/homeQuoteSection.css'

function HomeQuoteSection() {
    return (
            <div className="home-quote-section steele-background section">
                <div className="info-form-wrapper">
                    <div className="quote-info-wrapper">
                        <div className="title-info header-two">
                            We are taking car servicing seriously
                        </div>
                        <Feature img={"Icon.png"} title={"Convenient service"} text={"Through True Rich Attended does no end it his mother since real had half every him."}/>
                        <Feature img={"Icon.png"} title={"Convenient service"} text={"Through True Rich Attended does no end it his mother since real had half every him."}/>
                        <Feature img={"Icon.png"} title={"Convenient service"} text={"Through True Rich Attended does no end it his mother since real had half every him."}/>
                        <div className="arrow-wrapper">
                        <span className='body-text-small' >Know more about us</span>
                        <div className="img-wrapper">
                            <img className='arrow' src="Arrow.png" alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <div className="title-form-wrapper header-three">
                            If u need help we can recall you!
                        </div>
                        <div className="input-form-wrapper">
                        <RequestForm/>
                        </div>
                    </div>
                </div>        
            </div>
    )
}

export default HomeQuoteSection