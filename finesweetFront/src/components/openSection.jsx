import { Link as ScrollLink} from 'react-scroll';
import { motion } from 'framer-motion'

import OrangeBtn from '../components/orangeButton'

import '../styles/ServicesOpenSection.css'

function OpenSection(props) {
    return (
        <div className="services-open-section">
            <motion.div className="services-img-wrapper"
            initial={{x: -500, opacity:0}}
            animate={{x:0, opacity: 1}}
            transition={{duration:0.5, delay:0.75}}
            >
                <img src={props.img} alt="" />
            </motion.div>
            <div className="services-info-block-wrapper">
                <div className="service-content-block">
                    <motion.div 
                    initial={{x: 500, opacity:0}}
                    animate={{x:0, opacity: 1}}
                    transition={{duration:0.5}}
                     className="services-title-wrapper header-one">
                        {props.title}
                    </motion.div>
                    <motion.div className="services-text-wrapper body-big-text"
                    initial={{x: 500, opacity:0}}
                    animate={{x:0, opacity: 1}}
                    transition={{duration:0.5, delay:0.3}}
                    >
                        {props.text}
                    </motion.div>
                   <motion.div className="services-btn-wrapper"
                   initial={{x: 500, opacity:0}}
                   animate={{x:0, opacity: 1}}
                   transition={{duration:0.5, delay:0.5}}
                   > 
                        {props.btn && <ScrollLink to={props.link} smooth={true} duration={500} ><OrangeBtn text={props.textBtn}/></ScrollLink>}
                   </motion.div>
                </div>
            </div>          
        </div>
    )   
}

export default OpenSection