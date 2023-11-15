import { Link as ScrollLink} from 'react-scroll';
import OrangeBtn from '../components/orangeButton'

import '../styles/ServicesHowWeWork.css'

function ServicesHowWeWork () {
    return (
        <div className="services-how-we-work">
            <div className="how-we-work-wrapper">
                <div className="how-we-work-info-wrapper">
                    <div className="how-we-work-title header-three">
                        How we work and the process we follow
                    </div>
                    <div className="how-we-work-step">
                        <div >
                            <img src="check.png" className="how-we-work-step-img" alt="" />
                        </div>
                        <div className="how-we-work-text title-two">
                            Through True Rich Attended does no end it his mother since
                        </div>
                    </div>
                    <div className="how-we-work-step">
                        <div >
                            <img src="check.png" className="how-we-work-step-img" alt="" />
                        </div>
                        <div className="how-we-work-text title-two">
                            Through True Rich Attended does no end it his mother since
                        </div>
                    </div>
                    <div className="how-we-work-step">
                        <div >
                            <img src="check.png" className="how-we-work-step-img" alt="" />
                        </div>
                        <div className="how-we-work-text title-two">
                            Through True Rich Attended does no end it his mother since
                        </div>
                    </div>
                </div>
                <div className="how-we-work-img-wrapper">
                    <img src="how-work.png" alt="" />
                </div>
            </div>
            <div className="service-example-wrapper">
                <div className="service-example-img-wrapper">
                    <img src="service-example.png" alt="" />
                </div>
                <div className="service-example-info">
                    <div className="service-example-title header-three">
                    Diagnose Car Problems If You Don’t Know Much About Cars
                    </div>
                    <div className="service-example-text title-two">
                    We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes everything from struts, shocks, and tie rod ends to ball joints, springs everything from struts, shocks, and tie rod ends to ball joints, springs
                    </div>
                    <div className="service-example-btn-wrapper">
                        <ScrollLink to='choice-service' smooth={true} duration={500}><OrangeBtn text={"Book a service"} /></ScrollLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesHowWeWork