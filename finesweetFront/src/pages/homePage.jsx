import HomeOpenSection from "../sections/homeOpenSection"
import HomeQuoteSection from "../sections/homeQuoteSection"
import HomeTutorialSection from "../sections/homeTutorialSection"
import HomeOfferSection from "../sections/homeOfferSection"
import Banner from "../components/banner"
import HomeInfoSection from "../sections/homeInfoSection"
import HomeBrandsInfoSection from "../sections/homeBrandsInfo"
import HomeCommentSection from "../sections/homeCommentSection"
import HomeQuestionSection from "../sections/homeQuestionsSection"


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
            <Banner/>
        <div className="section steele-background">
            <div className="content__container">
                <HomeInfoSection/>
            </div>
        </div>
        <div className="section section-margin">
            <div className="content__container">
                <HomeBrandsInfoSection/>
            </div>
        </div>
        <div className="section steele-background section-margin">
            <div className="content__container">
                <HomeCommentSection/>
            </div>
        </div>
        <div className="section steele-background section-margin">
            <div className="content__container">
                <HomeQuestionSection/>
            </div>
        </div>
        </> 
    )
}

export default HomePage