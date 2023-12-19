import PreviewServiceBlock from '../components/previewServiceBlock'

import '../styles/HomeOfferSection.css'

function HomeOfferSection () {

    const data = JSON.parse(localStorage.getItem('serviceItems'));

    return (
        <div className="home-offer-section">
            <div className="offer-title-wrapper">
                <div className="home-offer-little-title title-two">
                    What we offer
                </div>
                <div className="home-offer-title header-two">
                    We offer full service auto repair & maintenance
                </div>
            </div>
            <div className="services-wrapper">
            {data.map((service) => (
                <div className="preview-service-wrapper"><PreviewServiceBlock key={service.pk} slug={service.slug} icon={service.previewIcon} hoverIcon={service.hoverPreviewIcon} name={service.name} /></div>
            ))} 
            </div>
        </div>
    )
}

export default HomeOfferSection