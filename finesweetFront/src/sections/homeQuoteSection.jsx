
import Feature from '../components/feature'
import OrangeBtn from '../components/orangeButton'

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
                            <form action="">
                                <input className='white-input' type="text" placeholder='Enter your name' />
                                <input className='white-input' type="text" placeholder='Enter your lastname' />
                                <input className='white-input' type="text" placeholder='Enter your phonenumber' />
                                <input className='white-input' type="text" placeholder='Enter your email  (Optional)' />
                            </form>
                            <div className="btn-quote-wrapper">
                                    <OrangeBtn text={'Contact with me'}/>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
    )
}

export default HomeQuoteSection