
import OrangeBtn from '../components/orangeButton'
import RequestForm from '../components/requestForm'

import '../styles/contactPage.css'


function ContactPage() {
    return (
        <div className="section steele-background page-section">
            <div className="content__container">
                <div className="contact-page">
                <div className="input-form-wrapper">
                        <div className="form-input-title-wrapper  header-one">
                            Get in touch with our experts
                        </div>
                            <RequestForm/>
                        <div className="contact-btn-wrapper">
                            <OrangeBtn text={"Send message"} />
                        </div>
                    </div>
                    <div className="contact-info-wrapper-page">
                    <div className="contact-info-item-page">
                        <div className="caption">Help line number</div>
                        <div className="title-two">1800 265 24 52</div>
                    </div>
                    <div className="contact-info-item-page">
                        <div className="caption">Address</div>
                        <div className="title-two">NH 234 Public Square San Francisco 65368</div>
                    </div>
                    <div className="contact-info-item-page">
                        <div className="caption">We are open</div>
                        <div className="title-two">Monday to Friday 9:00 AM to 10:00 AM</div>
                    </div>
                 </div>
            </div>
                <div className="map__container">
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21164.227262803957!2d35.060611532885275!3d48.46557730205898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3f9aa35a07d%3A0x4f008f86dfa3a7e8!2z0J3QsNCx0LXRgNC10LbQvdCw0Y8g0JTQvdC10L_RgNCw!5e0!3m2!1sru!2sua!4v1700082147773!5m2!1sru!2sua"  referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactPage