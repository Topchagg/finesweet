import HomeOpenSection from "../sections/homeOpenSection"
import HomeQuoteSection from "../sections/homeQuoteSection"
import HomeTutorialSection from "../sections/homeTutorialSection"
import HomeOfferSection from "../sections/homeOfferSection"


import '../styles/variabalse.css'

function HomePage(){
    return (
        <>
        <div className="section section-margin">
            <div className="content__container">
                <HomeOpenSection/>
            </div>
        </div> 
        <div className="section steele-background section-margin">
            <div className="content__container">
                <HomeQuoteSection/>
            </div>
        </div>
        <div className="section  section-margin">
            <div className="content__container">
                <HomeTutorialSection/>
            </div>
        </div>
        <div className="section steele-background  section-margin">
            <div className="content__container">
                <HomeOfferSection/>
            </div>
        </div>
        </> 
    )
}

export default HomePage