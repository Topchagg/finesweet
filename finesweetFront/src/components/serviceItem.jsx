import PreviewServiceBlock from './previewServiceBlock'


import '../styles/serviceItem.css'

function ServiceItem() {
    return (
        <div className="service-item-wrapper">
            <div className="title-of-service header-one">
                Auto diagnostic
            </div>
            <div className="service-info-wrapper">
                <div className="other-info-wrapper title-margin">
                    <div className="other-service-wrapper steele-background">
                        <div className="title-other-service title-one">
                            Other service
                            <div className="service-block-wrapper">
                                <PreviewServiceBlock/>
                            </div>
                            <div className="service-block-wrapper">
                                <PreviewServiceBlock/>
                            </div>
                            <div className="service-block-wrapper">
                                <PreviewServiceBlock/>
                            </div>
                            <div className="service-block-wrapper">
                                <PreviewServiceBlock/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-info-wrapper title-margin">
                    <div className="img-wrapper">
                        <img className='service-img' src="" alt="" />
                    </div>
                    <div className="start-title header-four title-margin">
                        The warning lights on your dashboard are the most obvious starting point.
                    </div>
                    <div className="main-service-text txt-margin  caption">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui auctor dictum eget a elit. Pellentesque varius diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus, pretium interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
                        <br></br> <br></br>
                        Ut non urna a odio condimentum dictum. Proin egestas erat a orci ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas sodales tristique quam. Suspendisse fringilla massa vel dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque egestas, non condimentum mi bibendum. Sed est eros, molestie consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris at nisi sed elit gravida malesuada.
                    </div>
                    <div className="sub-service-title title-one title-margin">
                        Delaying a diagnosis and repair could lead to even bigger problems down the road.
                    </div>
                    <div className="sub-service-text caption txt-margin">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui auctor dictum eget a elit. Pellentesque varius diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus, pretium interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
                    </div>
                    <div className="quote-wrapper txt-margin">
                        <img className='line' src="Line.png" alt="" />
                        <div className="quote-txt-wrapper caption">
                        Ut non urna a odio condimentum dictum. Proin egestas erat a orci ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis mollis ante.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceItem