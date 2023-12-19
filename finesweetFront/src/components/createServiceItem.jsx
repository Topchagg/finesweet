import Inputitem from './inputItem'
import InputFileItem from './inputFileItem'
import OrangeBtn from './orangeButton'

import {useState } from 'react'
import { useCreateServiceMutation,useUpdateServiceMutation } from '../redux/fineSweetApi'
import { downloadImgTo, updateImg } from '../firebase/firebaseScripts'
import {validate}  from '../validation'
import ServiceItem from './serviceItem'

import '../styles/createServiceItem.css'
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify'

function CreateServiceItem(props){

const [createService] = useCreateServiceMutation();
const [updateService] = useUpdateServiceMutation();

const [name, setName] = useState(props.name)
const [nameIsValid, setNameIsValid] =  useState(true)
const [mainTitle, setMainTitle] = useState(props.mainTitle)
const [mainTitleIsValid, setMainTitleIsValid] = useState(true)
const [subTitle, setSubTitle] = useState(props.subTitle)
const [subTitleIsValid, setSubTitleIsValid] = useState(true)
const [mainImg, setMainImg] = useState(props.img)
const [icon, setIcon] = useState(props.icon)
const [activeIcon, setActiveIcon] = useState(props.activeIcon)

const [quote, setQuote] = useState(props.quote)
const [quoteIsValid, setQuoteIsValid] = useState(true)
const [mainText, setMainText] = useState(props.mainText)
const [mainTextIsValid, setMainTextIsValid] = useState(true)
const [subText, setSubText] = useState(props.subText)
const [subTextIsValid, setSubTextIsValid] = useState(true)
const [previewText, setPreviewText] = useState(props.previewText)
const [previewTextIsValid, setPreviewTextIsValid] = useState(true)

const [isPreview, setIsPreview] = useState(false)

const navigate = useNavigate();

async function handleSubmit(Update, id){
        if(Update){
            const iconUrl = await updateImg(props.icon, icon, 'services/icon/')
            const imageUrl = await updateImg(props.img, mainImg, 'services/mainImg/')
            const hoverIconUrl = await updateImg(props.activeIcon, activeIcon, 'services/hoverIcon/')
            const data = {
                id: id,
                body: {
                    'name': name,
                    'mainImage': imageUrl,
                    'mainTitle': mainTitle,
                    'mainText': mainText,
                    'subTitle': subTitle,
                    'subText': subText,
                    'quotation': quote,
                    'previewText': previewText,
                    'previewIcon': iconUrl,
                    'hoverPreviewIcon': hoverIconUrl
                }
            }
            await updateService(data)
            const slug = slugify(data.body.name, { lower: true });
            navigate(`/service-page/${slug}`)
            window.location.reload();
        }
        else {
            const iconUrl = await downloadImgTo(icon, 'services/icon/');
            const imageUrl = await downloadImgTo(mainImg, 'services/mainImg/');
            const hoverIconUrl = await downloadImgTo(activeIcon, 'services/hoverIcon/');
            const data = {
                'name': name,
                'mainImage': imageUrl,
                'mainText': mainText,
                'mainTitle': mainTitle,
                'subTitle': subTitle,
                'subText': subText,
                'quotation': quote,
                'previewText': previewText,
                'previewIcon': iconUrl,
                'hoverPreviewIcon': hoverIconUrl
            }
            await createService(data);
            window.location.reload();
        }
}

function handleQuote(e){
    const result = validate(e.target.value, setQuoteIsValid, "350")
    if(result){
        setQuote(e.target.value)
    }
}


function handleSubText(e){
    const result = validate(e.target.value, setSubTextIsValid, "750")
    if(result){
        setSubText(e.target.value)
    }
}

function handlePreviewText(e){
    const result = validate(e.target.value, setPreviewTextIsValid, "200")
    if(result){
        setPreviewText(e.target.value)
    }
}

function handleMainText(e){
    const result = validate(e.target.value, setMainTextIsValid, "1500")
    if(result){
        setMainText(e.target.value)
    }
}

function handleName(e){
    const result = validate(e.target.value, setNameIsValid, "50")
    if(result){
        setName(e.target.value)
    }
}

function handleMainTitle(e){
    const result = validate(e.target.value, setMainTitleIsValid,"130")
        if(result){
            setMainTitle(e.target.value)
        }
}

function handleSubTitle(e){
    const result = validate(e.target.value, setSubTitleIsValid, "130")
    if(result){
        setSubTitle(e.target.value)
    }
}

function handleChangeImg(e) {
    if(e.target.files[0]){
        setMainImg(e.target.files[0])
    }
}

function handleChangeIcon(e) {
    if(e.target.files[0]){
        setIcon(e.target.files[0])
    }
}

function handleChangeActiveIcon(e){
    if(e.target.files[0]){
        setActiveIcon(e.target.files[0])
    }
}

if(isPreview) {
    return (
        <ServiceItem isPreview={isPreview} setIsPreview={setIsPreview} mainTitle={mainTitle} subTitle={subTitle} mainText={mainText} subText={subText} quote={quote} name={name} />
    )
}

    return (
        <div className="create-service-item steele-background">
           <div className="service-form-wrapper">
            <form action="">
                    <div className="input-wrapper-middle"><Inputitem setFunc={handleName} defaultValue={name} placeholder={'Name of service'} type={"text"} /></div>
                    <div className="image-download-wrapper title-margin">
                        <InputFileItem id={3+1} handleImg={handleChangeImg} text={'Main image'} downloaded={mainImg}/>
                        <InputFileItem id={3-1} handleImg={handleChangeIcon}  text={'Preview icon'} downloaded={icon} />
                        <InputFileItem id={3} handleImg={handleChangeActiveIcon} text={'Active Preview Icon'} downloaded={activeIcon}    />
                    </div>
                    <div className="input-wrappers title-margin">
                        <textarea className='white-input'   defaultValue={mainTitle} placeholder='Main title' onChange={(e) => (handleMainTitle(e))} ></textarea>
                        <textarea className='white-input'   defaultValue={subTitle} placeholder='Sub title' onChange={(e) => (handleSubTitle(e))} ></textarea>
                    </div>
                <div className="input-wrappers title-margin">
                    <div className="main-text-input-wrapper">
                        <textarea className='main text-input' defaultValue={mainText} onChange={(e) => (handleMainText(e))} placeholder='Main text'></textarea>
                    </div>
                    <div className="sub-text-input-wrapper">
                        <textarea className='sub text-input' defaultValue={subText} onChange={(e) => (handleSubText(e))} placeholder='Sub text' ></textarea>
                    </div>
                </div>
                <div className="input-wrappers title-margin">
                    <textarea className='quote quote-input' defaultValue={quote} onChange={(e) => (handleQuote(e))} placeholder='Qoute-text'></textarea>
                    <textarea className='preview quote-input' defaultValue={previewText} onChange={(e) => (handlePreviewText(e))} placeholder='Preview-text'></textarea>
                </div>
                {props.isUpdate ||
                <div className="buttons-wrapper">
                    <div className="btn-wrapper" onClick={() => (props.setIsCreate())}><OrangeBtn text={'Decline'}/></div>
                    <div className="btn-wrapper" onClick={() => (handleSubmit(props.isUpdate))} ><OrangeBtn text={'Create'}/></div>
                </div>
                }
                {props.isUpdate && 
                <div className="buttons-wrapper">
                    <div className="btn-wrapper" onClick={() => (props.setIsUpdate())}><OrangeBtn text={'Decline'}/></div>  
                    <div className="btn-wrapper" onClick={() => (handleSubmit(props.isUpdate, props.id))} ><OrangeBtn text={'Update'}/></div>
                </div>
                }
            </form>
           </div>
        </div>
    )
}

export default CreateServiceItem