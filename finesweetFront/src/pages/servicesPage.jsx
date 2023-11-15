import OpenSection from "../components/openSection"
import ChoiceServiceSection from "../sections/serviceChoiceSection"
import ServicesHowWeWork from "../sections/servicesHowWeWork"
import Banner from "../components/banner"

function ServicesPage() {
    return (
        <>
        <div className="section section-margin">
            <div className="content__container">
                <OpenSection btn={true} textBtn={'Book a service'}  link={'choice-service'} img={'services-open-photo.png'}  title={'Our Services'}  text={'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw Through True Rich Attended does  '} />
            </div>
        </div> 
        <div className="section steele-background section-margin">
            <div className="content__container">
                <ChoiceServiceSection/>
            </div>
        </div> 
        <div className="section  section-margin">
            <div className="content__container">
                <ServicesHowWeWork/>
            </div>
        </div> 
        <Banner/>
        </>
    )
}

export default ServicesPage