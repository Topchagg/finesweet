
import OpenSection from "../components/openSection"
import AboutStepSection from "../sections/aboutStepSection"
import AboutOurAdvantages from "../sections/aboutOurAdvantages"
import AboutWeOfferSection from "../sections/aboutWeOfferSection"
import AboutTeamSection from "../sections/aboutTeamSection"
import Banner from "../components/banner"


function AboutUsPage () {
    return (
        <>
        <div className="section section-margin">
            <div className="content__container">
                <OpenSection btn={false}   img={'about-us.png'}  title={'About us'}  text={'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw Through True Rich Attended does  '} />
            </div>
        </div> 
        <div className="section section-margin">
            <div className="content__container">
                <AboutStepSection/>
            </div>
        </div>
        <AboutOurAdvantages/>
        <div className="section steele-background">
            <div className="content__container">
                <AboutWeOfferSection/>
            </div>
        </div>
        <div className="section  section-margin">
            <div className="content__container">
                <AboutTeamSection/>
            </div>
        </div>
        <Banner/>
        </>
    )
}

export default AboutUsPage