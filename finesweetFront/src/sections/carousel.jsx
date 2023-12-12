import Slider from 'react-slick';
import ToRightArrow from '../components/toRightArrow'
import ToLeftArrow from '../components/toLeftArrow'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel (props) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow: <ToLeftArrow/>,
        nextArrow: <ToRightArrow/>
      };


    return (
        <Slider {...settings}>
                {props.carouselHandle}
        </Slider>
    )
}

export default Carousel