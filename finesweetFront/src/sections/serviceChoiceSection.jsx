import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ChoiceServiceSection.css';
import PreviewServiceBlock from '../components/previewServiceBlock';

function ChoiceServiceSection() {
    const [currentService, setCurrentService] = useState('');
    const [selectedService, setSelectedService] = useState(null);

    const activeChoice = {
        backgroundColor: '#FF6433',
        transform: 'scale(1.05)',
        color: 'white',
    };

    const defaultStyle = {
        backgroundColor: 'white',
    };

    const handleChangeService = (newCurrentService) => {
        setCurrentService(newCurrentService);
        const foundService = services.find((service) => service.slug === newCurrentService);

        if (foundService) {
            setSelectedService(foundService);
        }
    };

    const services = JSON.parse(localStorage.getItem('serviceItems')) || [];

    return (
        <div className="choice-service-section" id="choice-service">
            <div className="choice-service-content-block">
               {selectedService?.slug  && 
                <div className="info-about-service-wrapper">
                <div className="info-service-img-wrapper">
                    <img className='service-image' src={selectedService?.mainImage} alt="" />
                </div>
                <div className="name-of-service header-three">{selectedService?.name}</div>
                <div className="tittle-description-service caption">
                    {selectedService?.previewText}
                </div>
                <div className="service-arrow-wrapper">
                    <Link to={`/service-page/${selectedService.slug}`}> <div className="arrow-link-wrapper"><span>See service details!</span> <img className="arrow" src="Arrow.png" alt="" /></div> </Link>
                </div>
            </div>
            }
            {selectedService?.slug ? null : <h1>Choice service</h1>}
                <div className="other-service-block">
                    {services.slice(0, 6).map((preview, index) => (
                        <div
                            className="preview"
                            key={index}
                            onClick={() => handleChangeService(preview.slug)}
                            style={preview.slug === currentService ? activeChoice : defaultStyle}
                        >
                            <PreviewServiceBlock
                                preview={true}
                                name={preview.name}
                                icon={preview.previewIcon}
                                hoverIcon={preview.hoverPreviewIcon}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChoiceServiceSection;