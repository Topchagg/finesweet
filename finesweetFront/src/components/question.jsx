import { useState } from 'react'
import {useDeleteQuestionMutation, useUpdateQuestionMutation} from '../redux/fineSweetApi'
import { AnimatePresence, motion } from 'framer-motion'
import { validate, handleDecline } from '../validation'


import OrangeBtn from './orangeButton'
import BlackButton from './blacButton'
import Inputitem from './inputItem'

import '../styles/question.css'



function Question(props) {

    const [destroyQuestion] = useDeleteQuestionMutation();
    const [updateQuestion] = useUpdateQuestionMutation();

    const [show, setShow] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false)
    const [title, setTitle] = useState(props.title)
    const [titleIsValid, setTitleIsValid] = useState(true);
    const [text, setText] = useState(props.text)
    const [textIsValid, setTextIsValid] = useState(true);


    function handleTitleOnChage(e) {
        const result = validate(e.target.value, setTitleIsValid,'50')
        if(result) {
            setTitle(e.target.value)
        }
    }

    function handleTextOnChange(e) {
        const result = validate(e.target.value, setTextIsValid, '500')
        if(result) {
            setText(e.target.value)
        }
    }

    function handleOnUpdate() {
        setTitle(props.title)
        setText(props.text)
        setIsUpdate(!isUpdate)
    }

    const handleDeleteQuestion = async (id) => {
        await destroyQuestion(id).unwrap()
        window.location.reload();
    }

    const handleUpdateQuestion = async (id) => {
        if(title && text){
            const data = { title, text };
            await updateQuestion({id: id, data}).unwrap();
            window.location.reload();
        }
    }

    

    return (
       <>
       <div className="question-block">
        {isUpdate || <> 
        <div className="question-wrapper">
            <div className="question-title-show-btn-wrapper title-two">
                <div className="title-wrapper title-one">
                    {props.title}
                </div>
                    <div className="question-btn-wrapper">
                        {show || <motion.button
                        animate={{ opacity: 1, rotate: 360}}
                        transition={{duration:0.5}}
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
                        className="question-text-wrapper caption">
                        {props.text}
                    </motion.div>
            }  
            </AnimatePresence>
        </div>
        <div className="question-btn-wrapper" onClick={() => (handleOnUpdate())}><OrangeBtn text={'Update'}></OrangeBtn></div>
        <div className="btn-wrapper" onClick={() => (handleDeleteQuestion(props.id))}><BlackButton text={'Delete'}></BlackButton></div></>}
        {isUpdate && <>
                <motion.div initial={{x:400, opacity:0}} animate={{x: 0, opacity:1}} exit={{x:-400, opacity:0}} transition={{duration:0.3} } className="black-btn-decline-wrapper">
                    <div onClick={() => (handleDecline([setTextIsValid,setTitleIsValid,setText,setTitle],setIsUpdate))} className="btn-wrapper"><BlackButton  text={'Decline'}></BlackButton></div>
                    <form className='form-item-wrapper' action="">
                        {titleIsValid || <h1>Title isn`t valid, title should has only 50 chars</h1>}
                        <Inputitem type={'text'} defaultValue={props.title} placeholder={'Title'} setFunc={handleTitleOnChage}/>
                        <div className="input-item"><textarea onChange={(e) => handleTextOnChange(e)} className='text-area' defaultValue={props.text}  cols="75" rows="3" placeholder='Text'></textarea></div>
                        {textIsValid || <h1>Text isn`t valid, text should has only 500 chars</h1>}
                    </form>
                    <div className="btn-wrapper btn-wrapper-create-question" onClick={() => (handleUpdateQuestion(props.id))} ><OrangeBtn text={'Update'} /></div>
                </motion.div>
        </>}
        </div>
       </>
    )
}

export default Question