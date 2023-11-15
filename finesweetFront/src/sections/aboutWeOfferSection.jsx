import HomeInfoSection from './homeInfoSection'
import FeatureBlock from '../components/featureBlock'

import '../styles/aboutusWeOffer.css'

function AboutWeOfferSection() {
    return (
        <div className="about-we-offer-section">
            <div className="about-we-offer-title-wrapper header-two">
                Services we provide to our valued customers
            </div>
            <div className="about-what-we-offer-info-wrapper">
                <FeatureBlock img={'Icon.png'} title={'Convenient Service'} text={'Through True Rich Attended does no end it his mother since real had half every him end it his mother'}  />
                <FeatureBlock img={'Icon.png'} title={'Expert Mechanics'} text={'Through True Rich Attended does no end it his mother since real had half every him end it his mother'}  />  
                <FeatureBlock img={'Icon.png'} title={'Transparent Pricing'} text={'Through True Rich Attended does no end it his mother since real had half every him end it his mother'}  />
            </div>
            <HomeInfoSection/>
        </div>
    )
}

export default AboutWeOfferSection