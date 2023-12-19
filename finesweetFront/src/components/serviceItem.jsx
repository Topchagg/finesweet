import PreviewServiceBlock from './previewServiceBlock'
import OrangeBtn from './orangeButton'


import '../styles/serviceItem.css'
import { deleteImg } from '../firebase/firebaseScripts'
import { useState } from 'react'
import CreateServiceItem from './createServiceItem'
import { useDeleteServiceMutation } from '../redux/fineSweetApi'

function ServiceItem(props) {

    const [isCreate, setIsCreate] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false)
    const [destroyService] = useDeleteServiceMutation();

    async function handleDestroy(id) {
        await destroyService(id)
        await deleteImg(props.img)
        await deleteImg(props.icon)
        await deleteImg(props.activeIcon)
        window.location.reload();
    }

    if(isCreate) {
        return (
            <CreateServiceItem isUpdate={isUpdate} setIsCreate={() => (setIsCreate(!isCreate))} />
        )
    }
    if (isUpdate){
        return (
            <CreateServiceItem id={props.id} img={props.img} activeIcon={props.activeIcon} icon={props.icon} previewText={props.previewText} quote={props.quote} name={props.name} mainText={props.mainText} mainTitle={props.mainTitle} subTitle={props.subTitle} subText={props.subText}  isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
        )
    }


    return (
        <div className="service-item-wrapper">
            <div className="title-of-service header-one">
                {props.name}
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
                        <img className='service-img' src={props.img} alt="" />
                    </div>
                    <div className="start-title header-four title-margin">
                        {props.mainTitle}
                    </div>
                    <div className="main-service-text txt-margin  caption">
                       {props.mainText}
                    </div>
                    <div className="sub-service-title title-one title-margin">
                        {props.subTitle}
                    </div>
                    <div className="sub-service-text caption txt-margin">
                        {props.subText}
                    </div>
                    <div className="quote-wrapper txt-margin">
                        <img className='line' src="Line.png" alt="" />
                        <div className="quote-txt-wrapper caption">
                        {props.quote}
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttons-wrapper">
                <div onClick={() => (setIsUpdate(!isUpdate))}><OrangeBtn text={'Update'}/></div>
                <div onClick={() => (setIsCreate(!isCreate))}><OrangeBtn text={'Create new'}/></div>
                <div onClick={() => (handleDestroy(props.id))}><OrangeBtn text={'Delete'}/></div>
            </div>
        </div>
    )
}

export default ServiceItem