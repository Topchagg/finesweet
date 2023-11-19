import { useState } from 'react';
import Question from '../components/question'
import OrangeBtn from '../components/orangeButton';
import { useGetQuestionsQuery,useAddQuestionMutation } from '../redux/fineSweetApi'
import { motion } from 'framer-motion';
import { validate,handleDecline } from '../validation';

import '../styles/HomeQuestionSection.css'

function HomeQuestionSection () {

    const [addQuestion] = useAddQuestionMutation();

    const [titleIsValid, setTitleIsValid] = useState(true);
    const [textIsValid, setTextIsValid] = useState(true);
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [isCreating, setIsCreating] = useState(false)

    const handleAddQuestion = async () => {
      if(title && text && titleIsValid && textIsValid){
        await addQuestion({title: title, text:text}).unwrap();
        setText('')
        setTitle('')
        window.location.reload();
      }  
    }

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

    const animationVariants = {
        hidden: {
            x: 400,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        },
    }


    const {data = [], isLoading } = useGetQuestionsQuery();

    return (
        <>
        {isCreating || <motion.div initial={'hidden'} animate={'visible'} transition={{duration: 0.5}} variants={animationVariants} className="home-question-section">

            <div className="home-question-title header-three">
                Frequently Asked Questions
            </div>
            <div className="questions-wrapper">
            {data.map((question) => (
                <Question key={question.pk} id={question.pk} title={question.title} text={question.text} />
            ))} 
            <div className="create-new-question-btn-wrapper section btn-wrapper" onClick={() => setIsCreating(!isCreating)}><OrangeBtn text={'Create new'}/></div>
            </div>
        
        </motion.div>}
        {isCreating && <motion.div initial={'hidden'} animate={'visible'} transition={{duration: 0.5, delay:0.2}} variants={animationVariants} className="create-section-wrapper">
            <form className='form-item-wrapper' action="">
                <div className="buttons-wrapper">
                    <div className="create-new-question-btn-wrapper" onClick={() => (handleDecline([setIsUpdate,setTextIsValid,setTitleIsValid,setText,setTitle]))}><OrangeBtn text={'Decline'}/></div>
                    <div onClick={() => (handleAddQuestion())} className="btn-wrapper btn-wrapper-create-question"><OrangeBtn text={'Create'} /></div>
                </div>
                    {titleIsValid || <h1>Title isn`t valid, title should has only 50 chars</h1>}
                    <div className="input-item"><input onChange={(e) => handleTitleOnChage(e)} className='white-input' type="text" placeholder='Title' /></div>
                    <div className="input-item"><textarea onChange={(e) => handleTextOnChange(e)} className='text-area' cols="75" rows="3" placeholder='Text'></textarea></div>
                    {textIsValid || <h1>Text isn`t valid, text should has only 500 chars</h1>}
            </form>
        </motion.div>}
        </>
    )
}

export default HomeQuestionSection