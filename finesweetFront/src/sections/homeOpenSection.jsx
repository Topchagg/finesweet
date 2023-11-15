import { motion } from 'framer-motion'

import '../styles/homeOpenSection.css'

function HomeOpenSection () {
    return (
        <div  className="home-open-section">
            <motion.div className="title-info-wrapper"
                initial={{x:-300, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration:0.5, delay:0.75}}
                
            >
                <div className="title-wrapper header-one">
                    Get your vehicle service done online at one place
                </div>
                <div className="info-wrapper">
                    <div className="info-caption caption">
                        We are open
                    </div>
                    <div className="info-text body-text-small">
                        Monday to Friday 9:00 AM to  10:00  AM
                    </div>
                </div>
            </motion.div>
            <div className="img-wrapper">
                <motion.img src="homeopenimage.png" alt="" 
                initial={{x:300, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration:0.75}}
                />
            </div>
        </div>
    )
}

export default HomeOpenSection