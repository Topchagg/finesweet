
import Step from '../components/step'

import '../styles/aboutStepSection.css'

function AboutStepSection() {
    return ( 
        <div className="about-step-section">
            <div className="how-we-provide-info">
                <div className="how-we-provide-title-wrapper header-three">
                    We Provide Expert Service and aim to have a long term with you 
                </div>
                <div className="how-we-provide-text-wrapper caption">
                We provide a full range of front end mechanical repairs for all makes and models of cars, no matter
                </div>
                <div className="how-we-provide-steps-wrapper">
                    <Step link={'/contact'} numeric={1} title={"Get a Quote"} text={"Through True Rich Attended does no end it his mother since real had half every."} />
                    <Step link={'/services'} numeric={2} title={"Book an Appointment"} text={"Through True Rich Attended does no end it his mother since real had half every."}  />
                    <Step link={'/'} numeric={3} title={"Get your Service Done"} text={"Through True Rich Attended does no end it his mother since real had half every."} />
                </div>
            </div>
            <div className="how-we-provide-img-wrapper">
                <img src="steps-do.png" alt="" />
            </div>
        </div>
    )
}
export default AboutStepSection