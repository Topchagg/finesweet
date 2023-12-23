import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/PreviewServiceBlock.css'
import { Link } from 'react-router-dom'

function PreviewServiceBlock (props) {

    const  [isHover, setIsHover] = useState(false)

    if(props.preview){
        return (
        <div className="preview-service-block" onMouseEnter={() => (setIsHover(!isHover))} onMouseLeave={() => (setIsHover(!isHover))} >
            <div className="service-block-content">
                <div className="service-block-icon-wrapper">
                    {isHover || <motion.div  initial={{opacity:1}} animate={{opacity:1}} transition={{duration:400}} className="icon-wrapper"><img className='service-icon' src={props.icon} alt="" /></motion.div> }
                    {isHover && <div className="icon-wrapper"><img  className='service-icon' src={props.hoverIcon} alt="" /></div> }
                </div>  
                <div className="service-block-txt-wrapper title-two">
                    {props.name}
                </div>
            </div>
        </div>
        )
    }

    return (
       <Link to={"/service-page/" + props.slug}>
        <div className="preview-service-block" onMouseEnter={() => (setIsHover(!isHover))} onMouseLeave={() => (setIsHover(!isHover))} >
            <div className="service-block-content">
                <div className="service-block-icon-wrapper">
                    {isHover || <motion.div  initial={{opacity:1}} animate={{opacity:1}} transition={{duration:400}} className="icon-wrapper"><img className='service-icon' src={props.icon} alt="" /></motion.div> }
                    {isHover && <div className="icon-wrapper"><img  className='service-icon' src={props.hoverIcon} alt="" /></div> }
                </div>  
                <div className="service-block-txt-wrapper title-two">
                    {props.name}
                </div>
            </div>
        </div>
        </Link>
    )
}

export default PreviewServiceBlock