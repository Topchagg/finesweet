import OrangeBtn from '../components/orangeButton'
import Step from '../components/step'

import '../styles/homeTutorialSection.css'

function HomeTutorialSection() {
    return (
        <div className="tutorial-section">
            <div className="process-info-wrapper">
                <div className="title-process-info header-two">
                    We follow a clear process to help you out.
                </div>
                <div className="text-process-info body-text-big">
                    Through True Rich Attended does no end it his mother since real had half every him case in packages enquire
                </div>
                <div className="process-btn-wrapper">
                    <OrangeBtn text={"Learn more"}/>
                </div>
            </div>
            <div className="step-by-step-info-wrapper">
                <Step link={'/contact'} numeric={1} title={"Get a Quote"} text={"Through True Rich Attended does no end it his mother since real had half every."} />
                <Step link={'/services'} numeric={2} title={"Book an Appointment"} text={"Through True Rich Attended does no end it his mother since real had half every."}  />
                <Step link={'/'} numeric={3} title={"Get your Service Done"} text={"Through True Rich Attended does no end it his mother since real had half every."} />
            </div>
        </div>
    )
}

export default HomeTutorialSection