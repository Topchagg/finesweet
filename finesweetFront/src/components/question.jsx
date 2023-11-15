
import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import '../styles/question.css'


function Question(props) {

    const [show, setShow] = useState(false)

    return (
        <AnimatePresence>
        <div className="question-wrapper">
            <div className="question-title-show-btn-wrapper title-two">
                <div className="title-wrapper title-one">
                    {props.title}
                </div>
                    <div className="question-btn-wrapper">
                        {show || <motion.button
                        animate={{ opacity: 1, rotate: 360}}
                        transition={{duration:0.5}}
                        exit={{ opacity: 1, rotate: 360}}
                        className='question-btn' type='button' onClick={() => (setShow(!show))}>+</motion.button>}
                        {show && <motion.button animate={{ opacity: 1, rotate: 360}} transition={{duration:0.5}}
                         className='question-btn' type='button' onClick={() => (setShow(!show))}>-
                         </motion.button>}
                    </div>
            </div>
            <AnimatePresence>
            {show && 
            <motion.div
            initial={{opacity:0, height:0}}
            animate={{opacity:1, height:'auto'}}
            exit={{opacity:0, height:0}}
            transition={{duration:0.3}}
            className="question-text-wrapper caption">
            {props.text}
            </motion.div>
            }
            </AnimatePresence>
        </div>
        </AnimatePresence>
    )
}

export default Question