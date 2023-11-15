
import OrangeBtn from '../components/orangeButton'

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
                        <form action="" className='form-item-wrapper'>
                            <div className="contact-input-item">
                                <input className='white-input' type="text" placeholder='Your full name'/>
                            </div> 
                            <div className="contact-input-item">
                                <input className='white-input' type="text" placeholder='Phone number'/>
                            </div>
                            <div className="contact-input-item">
                                <input className='white-input' type="text" placeholder='Your email (optional)'/>
                            </div>
                            <div className="contact-input-item">
                                <input className='white-input' type="text" placeholder='Message'/>
                            </div>
                        </form>
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
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105793.32855778556!2d-118.26608663834755!3d34.042806097640806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6f954005675%3A0x9e94554f839c09df!2z0JTQvtC00LbQtdGAINCh0YLQsNC00LjRg9C8!5e0!3m2!1sru!2sua!4v1699904334613!5m2!1sru!2sua"     loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactPage