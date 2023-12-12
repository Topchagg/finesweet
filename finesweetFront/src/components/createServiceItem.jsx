import Inputitem from './inputItem'
import InputFileItem from './inputFileItem'
import OrangeBtn from './orangeButton'

import { useState } from 'react'
import {validate}  from '../validation'

import '../styles/createServiceItem.css'

function CreateServiceItem(props){

const [name, setName] = useState('')
const [nameIsValid, setNameIsValid] =  useState(true)
const [mainTitle, setMainTitle] = useState('')
const [mainTitleIsValid, setMainTitleIsValid] = useState(true)
const [subTitle, setSubTitle] = useState('')
const [subTitleIsValid, setSubTitleIsValid] = useState('')
const [mainImg, setMainImg] = useState('')
const [icon, setIcon] = useState('')


function handleName(e){
    const result = validate(e.target.value, setNameIsValid, "50")
    if(result){
        setName(e.target.value)
    }
}

function handleMainTitle(e){
    const result = validate(e.target.value, setMainTitleIsValid,"50")
        if(result){
            setMainTitle(e.target.value)
        }
}

function handleSubTitle(e){
    const result = validate(e.target.value, setSubTitleIsValid, "50")
    if(result){
        setSubTitle(e.target.value)
    }
}

function handleChangeImg(e) {
    if(e.target.value){
        setMainImg(e.target.value)
    }
}

function handleChangeIcon(e) {
    if(e.target.value){
        setIcon(e.target.value)
    }
}

    return (
        <div className="create-service-item steele-background">
           <div className="service-form-wrapper">
            <form action="">
                    <div className="input-wrapper-middle"><Inputitem setFunc={handleName} defaultValue={name} placeholder={'Name of service'} type={"text"} />  </div>
                    <div className="image-download-wrapper title-margin">
                        <InputFileItem id={3+1} handleImg={handleChangeImg} text={'Main image'} downloaded={mainImg} />
                        <InputFileItem id={3-1} handleImg={handleChangeIcon}  text={'Preview icon'} downloaded={icon}/>
                    </div>
                    <div className="input-wrappers title-margin">
                        <Inputitem defaultValue={mainTitle} placeholder={'Main title'} setFunc={handleMainTitle} />
                        <Inputitem defaultValue={subTitle} placeholder={'Sub title'} setFunc={handleSubTitle}  />
                    </div>
                <div className="input-wrappers title-margin">
                    <div className="main-text-input-wrapper">
                        <textarea className='main text-input' placeholder='Main text'></textarea>
                    </div>
                    <div className="sub-text-input-wrapper">
                        <textarea className='sub text-input' placeholder='Sub text' ></textarea>
                    </div>
                </div>
                <div className="input-quote-text-wrapper">
                    <textarea className='quote quote-input' placeholder='Qoute-text'></textarea>
                </div>
                <div className="btn-wrapper"><OrangeBtn text={'Create'}/></div>
            </form>
           </div>
        </div>
    )
}

export default CreateServiceItem